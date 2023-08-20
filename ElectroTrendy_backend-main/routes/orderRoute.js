const express = require('express');
const {
  deleteOrder,
  getOrder,
  createOrder,
  getAllOrders,
} = require('../controllers/orderControllers');
const router = express.Router();

// get all Orders
router.route('/').get(getAllOrders).post(createOrder);

// get specific Order
router.route('/:id').get(getOrder).delete(deleteOrder);

module.exports = router;
