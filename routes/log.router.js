const routerAuth = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require("../db/models");
const Login = require("../views/Login"); // изменить на компонент логирования;

routerAuth.get("/log", (req, res) => {
  // отображение формочки логирования.
  res.renderComponent(Login, {});
});

routerAuth.post("/log", async (req, res) => {
  const { email, password } = await req.body; // дописать откуда подтяшиваем
  const userDisplay = await User.findOne({ raw: true, where: { email } });

  if (userDisplay && (await bcrypt.compare(password, userDisplay.password))) {
    req.session.userId = userDisplay.id;

    res.redirect("/");
  } else res.renderComponent(Login, {});
});

module.exports = routerAuth;
