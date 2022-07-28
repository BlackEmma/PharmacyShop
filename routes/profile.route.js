const router = require('express').Router();
const { User } = require('../db/models');
const Profile = require('../views/Profile');

router.get('/profile/:id', async (req, res) => {
  const { userId } = req.session;
  const user = await User.findOne({ raw: true, where: { id: userId } });
  res.renderComponent(Profile, { user, userId });
});

module.exports = router;
