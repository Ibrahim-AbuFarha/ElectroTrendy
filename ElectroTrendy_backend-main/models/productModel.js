const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },

  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'vendors',
    required: true,
  },
  cat: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: new Date().toUTCString(),
  },
});

const productModel = mongoose.model('products', productSchema);
module.exports = productModel;
