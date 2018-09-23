const paymentApi = require('./payment');
const productApi = require('./product');

const configureRoutes = app => {
  paymentApi(app);
  productApi(app);
};

module.exports = configureRoutes;
