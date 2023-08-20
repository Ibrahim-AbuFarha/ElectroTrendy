const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    default:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shop.svg/1200px-Shop.svg.png',
  },
});

const customerModel = mongoose.model('customers', customerSchema);
module.exports = customerModel;
