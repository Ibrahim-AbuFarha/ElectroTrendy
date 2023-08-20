const Vendor = require('../models/vendorModel');
exports.createVendor = async (req, res) => {
  try {
    const newVendor = await Vendor.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        vendor: newVendor,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    res.status(200).json({
      status: 'success',

      vendor,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateVendor = async (req, res) => {
  try {
    //By default, findOneAndUpdate() returns the document as it was before update was applied.
    //If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      vendor,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);
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
//  NEW NEW NEW
exports.vendorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the vendor with the provided email exists in the database
    const vendor = await Vendor.findOne({ email });
    if (!vendor) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'Vendor not found' });
    }

    // Compare the provided password with the hashed password stored in the database

    const isPasswordValid = password === vendor.password;
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ status: 'fail', message: 'Invalid password' });
    }
    res.status(200).json({ status: 'success', vendorId: vendor._id });

    // If the email and password are valid, generate a JWT token and send it back to the client
    // const token = jwt.sign({ vendorId: vendor._id }, 'your-secret-key', {
    //   expiresIn: '1h',
    // });
  } catch (err) {
    res
      .status(500)
      .json({ status: 'error', message: 'An error occurred', error: err });
  }
};
