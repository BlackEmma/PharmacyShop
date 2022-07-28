const router = require('express').Router();
const Home = require('../views/Home');
const { Drug } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const arrDrugs = await Drug.findAll();
    const { userId } = req.session;
    res.renderComponent(Home, { arrDrugs, userId });
  });

module.exports = router;
