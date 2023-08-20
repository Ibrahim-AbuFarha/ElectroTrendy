const Product = require('../models/productModel');

const ApiFeatures = require('../utils/apiFeatures');

exports.getAllProducts = async (req, res) => {
  try {
    const features = new ApiFeatures(Product, req.query)
      .filter()
      .sort()
      .pagination();
    const products = await features.query;
    const count = await Product.count();
    res.status(200).json({
      status: 'success',
      count,
      resultNum: products.length,
      products,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      status: 'success',

      product,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    //By default, findOneAndUpdate() returns the document as it was before update was applied.
    //If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      product,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
exports.getVendorProducts = async (req, res) => {
  try {
    const { id: vendorId } = req.params;
    const vendorProducts = await Product.find({ vendorId });
    console.log(req.params.id);
    console.log(vendorProducts);
    res.status(200).json({
      status: 'success',

      vendorProducts,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
