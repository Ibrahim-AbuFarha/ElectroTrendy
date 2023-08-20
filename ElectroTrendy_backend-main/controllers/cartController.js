const Cart = require('../models/cartModel');

exports.getCart = async (req, res) => {
  try {
    const { customerId } = req.params;
    const cart = await Cart.findOne({ customerId }).populate(
      'productList.productId'
    );
    console.log(cart);
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    return res.status(200).json({
      message: 'success',
      cart,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: 'fail',
    });
  }
};

exports.addItemToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const { customerId } = req.params;

    console.log(customerId);
    // find the user cart  Cart.find({customerId })
    const cart = await Cart.findOne({ customerId });
    console.log(cart);
    let product = cart.productList.find(
      (item) => item.productId.toString() === productId
    );
    if (!product) {
      cart.productList.push({ quantity: 1, productId });
    } else {
      product.quantity += 1;
    }

    await cart.save();

    const { productList } = await cart.populate('productList.productId');

    res.status(201).json({
      message: 'success',
      productList,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: 'fail',
    });
  }
};

exports.removeItemFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const { customerId } = req.params;
    // find the user cart  Cart.find({customerId })
    const cart = await Cart.findOne({ customerId });
    let product = cart.productList.find(
      (item) => item.productId.toString() === productId
    );
    console.log(product);
    if (product.quantity > 1) {
      product.quantity -= 1;
    } else {
      updatedProductList = cart.productList.filter(
        (item) => item.productId.toString() !== productId
      );

      cart.productList = updatedProductList;
    }

    await cart.save();
    const { productList } = await cart.populate('productList.productId');

    res.status(201).json({
      message: 'success',
      productList,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: 'fail',
    });
  }
};

exports.removeAllItems = async (req, res) => {
  try {
    const { customerId } = req.params;
    // find the user cart  Cart.find({customerId })
    const cart = await Cart.findOne({ customerId });

    cart.productList = [];

    await cart.save();

    res.status(201).json({
      message: 'success',
      cart,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: 'fail',
    });
  }
};
