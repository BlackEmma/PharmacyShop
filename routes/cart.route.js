const router = require('express').Router();
const { User, Drug } = require('../db/models');
const CartList = require('../views/CartList');

router.route('/cart')
  .get(async (req, res) => {
    try {
      const userID = req.session.userId; // вытаскиваем id текущего пользователя
      const arrDrugs = await Drug.findAll({
        raw: true,
        include: [{
          model: User,
          where: { id: userID }, // id текущего пользователя
        }],
      });
      // вытаcкиваем из бд все записи о лекарствах в корзине конкретного пользователя
      // (по id текущего пользователя)

      res.renderComponent(Drug, { arrDrugs });
    } catch (err) {
      res.status(500).send('Ошибка получения данных о корзине');
    }
  });
