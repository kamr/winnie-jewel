const data = require('../data/data.js');

const productApi = app => {
  app.get('/product/getCollections', (req, res) => {
    res.json(data['collections'])
  });

  app.get('/product/getProducts', (req, res) => {
    const collection = req.query.collection
    res.json(data['products'][collection])
  });

  return app;
};

module.exports = productApi;
