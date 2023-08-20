const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productList: [
    {
      productId: { type: mongoose.Schema.ObjectId, ref: 'products' },
      quantity: {
        type: Number,
      },
    },
  ],

  customerId: {
    type: mongoose.Schema.ObjectId,
    ref: 'customers',
    required: true,
  },
});

const cartModel = mongoose.model('cart', cartSchema);
module.exports = cartModel;
