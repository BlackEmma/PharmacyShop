const router = require('express').Router();
const Home = require('../views/Home');

router.route('/')
  .get((req, res) => {
    res.renderComponent(Home, {});
  });

module.exports = router;