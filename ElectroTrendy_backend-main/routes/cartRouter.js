const express = require('express');
const Router = express.Router();

const {
  addItemToCart,
  removeItemFromCart,
  getCart,
  removeAllItems,
} = require('../controllers/cartController');

Router.route('/:customerId').get(getCart);
Router.route('/addItem/:customerId').post(addItemToCart);
Router.route('/removeAllItems/:customerId').patch(removeAllItems);
Router.route('/removeItem/:customerId').patch(removeItemFromCart);

module.exports = Router;
