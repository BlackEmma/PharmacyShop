const router = require('express').Router();
const Home = require('../views/Home');
// подключение моделей бд Drug и Cart
const { Drug, Cart } = require('../db/models');

router.route('/')
  // обработчик get-запросов для домашней страницы
  .get(async (req, res) => {
    // вытаскиваем из бд все лекарства
    const arrDrugs = await Drug.findAll();
    const { userId } = req.session;
    // создаем счетчик для корзины, равный 0
    const count = 0;
    // рендерим и отдаем страничку (через использование нашей миддлеварки)
    res.renderComponent(Home, { arrDrugs, count, userId });
  })

  // обработчик post-запросов для домашней страницы
  .post(async (req, res) => {
    // проверяем, что пользователь НЕ залогинен
    if (!req.session.userId) {
      // в этом случае редиректим его на страницу логина и заканчивае работу обработчика
      return res.redirect('/log');
    }

    // в ином случае (если пользователь залогинен и код не зашел в верхний if) пробуем выполнить...
    try {
      // достаем id лекарства из тела запроса
      const { drugId } = req.body;
      // достаем id текущего пользователя из сессии
      const { userId } = req.session;
      // ждем записи в бд в таблицу корзины
      await Cart.create({ userId: Number(userId), drugId: Number(drugId) });
      // отправляем json-ответ с объектом, в который кладем счетчик, равный 1
      // так как мы записали в бд 1 лекарство
      res.json({ count: 1 });
      // в случае возникновения ошибки, ловим ее catch
    } catch (err) {
      // и отправляем статус 500 и фразу об ошибке записи в бд
      res.status(500).end(`ошибка записи в бд:\n${err.message}`);
    }
  });

module.exports = router;
