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

      const { userId } = req.session;
      res.renderComponent(CartList, { arrDrugs, userId });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

module.exports = router;
