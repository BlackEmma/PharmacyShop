const router = require("express").Router();
const Home = require("../views/Home");
const { Drug, Cart } = require("../db/models");

router
  .route("/")
  .get(async (req, res) => {
    const arrDrugs = await Drug.findAll();
    res.renderComponent(Home, { arrDrugs });
  })
  .post(async (req, res) => {
    console.log(23454454545);
    if (!req.session.userId) {
      return res.redirect("/log");
    }

    const { drugId } = req.body;
    console.log(drugId);
    const drugInCart = new Cart({ userId: req.session.userId, drugId });
    await drugInCart.save();
    res.end();
  });

module.exports = router;
