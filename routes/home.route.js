const router = require('express').Router();
const Home = require('../views/Home');
const { Drug } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const arrDrugs = await Drug.findAll();
    res.renderComponent(Home, { arrDrugs });
  });

module.exports = router;
