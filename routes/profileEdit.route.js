const router = require('express').Router();
const ProfileEdit = require('../views/ProfileEdit');
const { User } = require('../db/models');

router.route('/profile/:id/edit')
  .get((req, res) => {
    const { userId } = req.session;
    res.renderComponent(ProfileEdit, { userId });
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const {
      name, birthday, city, phone,
    } = req.body;

    await User.update({
      name, birthday, city, phone,
    }, { where: { id } });
    res.redirect('/profile/:id');
  });

module.exports = router;
