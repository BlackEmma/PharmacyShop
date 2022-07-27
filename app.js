require('@babel/register');
const express = require('express');

const app = express(); 
const config = require('./config/config')

const PORT = process.env.PORT || 3000; 

config(app);

app.listen(PORT, () => {
    console.log('Uraaaa!!! My podkluchilis');
})