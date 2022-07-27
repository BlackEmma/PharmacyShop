require("@babel/register");
const routerAuth = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../db/models");
const Login = require("../views/Login"); //изменить на компонент логирования;

routerAuth.get("/log", (req, res) => {
  //отображение формочки логирования.
  res.rendeComponemt(Login, {});
});

routerAuth.post("/log", async (req, res) => {
  let userDisplay = await User.findOne({ raw: true, where: { mail } });
  const { mail, password } = await req.body; // дописать откуда подтяшиваем данные о user.
  console.log({ mail, password });
  if (userDisplay && (await bcrypt.compare(password, userDisplay.password))) {
    req.session.userId = userDisplay.id;

    res.redirect("/");
  } else res.rendeComponemt(Login, {});
});

module.exports = routerAuth;
