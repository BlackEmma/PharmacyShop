const router = require('express').Router();
const bcrypt = require('bcrypt');
const Registration = require('../views/Registration');
const { User } = require('../db/models');

const saltRounds = 10;

router.route('/reg')
  .get((req, res) => {
    // по get-запросу отдаем отрендеренную формочку для регистрации
    res.renderComponent(Registration, {});
  })

  .post(async (req, res) => {
    // вытаскиваем из пользовательского ввода значения полей name, email, password
    const { name, email, password } = req.body;

    // пытаемся найти пользователя в базе данных
    const userFromDb = await User.findOne({ where: { email } });

    if (userFromDb) {
      // если мы нашли пользователя с таким email в бд, то посылаем сообщение об ошибке
      res.status(403).send('Регистрация невозможна, такой email уже существует'); // надо получше продумать, в каком виде показывать ответ пользователю
    } else {
      // если такого пользователя в бд нет, то пробуем его создать
      try {
        // создаем нового user
        const user = new User({ name, email, password: await bcrypt.hash(password, saltRounds) });
        // ждем, пока новый user сохранится в бд
        await user.save();

        // добавляем user в новую сессию, чтобы после регистрации пользователь сразу был залогинен
        req.session.userId = user.id;
        // после успешной регистрации посылаем статус 201(создано) и редиректим на главную
        res.status(201).redirect('/');
      } catch (err) {
        res.status(500).send('Ошибка регистрации');
      }
    }
  });

module.exports = router;
