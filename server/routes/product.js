const data = require('../data/data.js');

const path = require('path');
const express = require('express');

const productApi = app => {
  app.get('/product/getCollections', (req, res) => {
    res.json(data['collections'])
  });

  app.get('/product/getProducts', (req, res) => {
    const collection = req.query.collection
    const products = data['products'].filter(function(product){
      return product.collection == collection
    })
    res.json(products)
  });

  // app.get('/product/getProductImage', (req, res) => {
  //   const imagePath = path.resolve(__dirname + '/../images/earrings.jpg');
  //   res.set('Content-Type', 'image/jpeg');
  //   res.sendFile(imagePath);
  // });
  // app.use(express.static(__dirname + '/../images/earrings.jpg'));
  app.use('/images', express.static('images'))

  return app;
};

module.exports = productApi;
