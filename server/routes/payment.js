const stripe = require('../constants/stripe');

const postStripeCharge = res => (stripeErr, stripeRes) => {
  console.log("stripeErr", stripeErr)
  console.log("stripeRes", stripeRes)
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

const paymentApi = app => {
  app.get('/payment', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  app.post('/payment', (req, res) => {
    console.log("req.body", req.body)
    stripe.charges.create(req.body, postStripeCharge(res));
  });

  return app;
};

module.exports = paymentApi;
