const data = require('../data/data.js');

const path = require('path');
const express = require('express');

const productListToObject = products => {
  const result = {}
  for (productId in products) {
    let {id, ...newProduct} = products[productId]
    result[productId] = newProduct
  }
  console.log(result)
  return result
}

const productApi = app => {
  app.get('/product/getCollections', (req, res) => {
    res.json(data['collections'])
  });

  app.get('/product/getProduct', (req, res) => {
    const productId = req.query.productId
    const product = data['products'][productId - 1];
    // IMPROVE THIS: relies on products being in order
    res.json(product)
  });

  app.get('/product/getProducts', (req, res) => {
    const collection = req.query.collection
    const products = data['products'].filter(function(product){
      return product.collection == collection
    })
    const result  = productListToObject(products)
    res.json(result)
  });

  app.get('/product/getProductByIds', (req, res) => {
    const productIds = JSON.parse(req.query.productIds)
    console.log("productIds", req.query.productIds)
    console.log("productIds parse", productIds)
    const products = data['products'].filter(function(product){
      return productIds.includes(product.id)
    })
    const result  = productListToObject(products)
    res.json(result)
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
