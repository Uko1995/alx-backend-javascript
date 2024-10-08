/* eslint-disable prefer-destructuring */
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to the payment system').status(200);
});
app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`).status(200);
});
app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});
app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`).status(200);
});
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
module.exports = app;
