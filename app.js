require('@babel/register');
const express = require('express');
const cartRouter = require('./routes/cart.route');
const homeRouter = require('./routes/home.route');
const logRouter = require('./routes/log.router');
const regRouter = require('./routes/reg.route');
const profileRouter = require('./routes/profile.route');
const profileEditRouter = require('./routes/profileEdit.route');

const app = express();

const config = require('./config/config');

const PORT = process.env.PORT || 3000;

config(app);

app.use('/', homeRouter);
app.use('/', cartRouter);
app.use('/', logRouter);
app.use('/', regRouter);
app.use('/', profileRouter);
app.use('/', profileEditRouter);

app.listen(PORT, () => {
  console.log('Uraaaa!!! My podkluchilis');
});
