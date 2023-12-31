const Customer = require('../models/customerModel');
const jwt = require('jsonwebtoken');
const Cart = require('../models/cartModel');

exports.signUp = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const customer = await Customer.create({
      name,
      email,
      password,
      confirmPassword,
    });

    // Create cart for the customer

    const userCart = new Cart({ customerId: customer._id, productList: [] });

    await userCart.save();

    // Create token
    const token = jwt.sign({ id: customer._id }, process.env.JWT_SECRET);
    console.log(token);

    res.status(201).json({
      state: 'success',
      token,
      data: { customer },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    //1)Check if email and password exist
    if (!email || !password) {
      throw new Error('Please provide your email and password');
    }
    //2)Check if user exist && password is correct
    const currentUser = await Customer.findOne({ email }).select('+password');
    console.log(currentUser);
    //3)If everything ok, send token to client

    const token = jwt.sign({ id: currentUser._id }, process.env.JWT_SECRET);
    res.status(200).json({
      status: 'success',
      token,
      id: currentUser._id,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
