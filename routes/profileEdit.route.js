const router = require('express').Router();
const ProfileEdit = require('../views/ProfileEdit');
const { User } = require('../db/models');

router.get('/profile/:id/edit', (req, res) => {
  const { userId } = req.session;
  res.renderComponent(ProfileEdit, { userId });
});

router.put('/profile/:id/edit', async (req, res) => {
  const { userId } = req.session;
  const {
    name, birthday, city, phone,
  } = req.body;
  await User.update({
    name, birthday, city, phone,
  }, { where: { id: userId } });
  res.end();
});
module.exports = router;
