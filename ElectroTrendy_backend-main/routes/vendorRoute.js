const express = require('express');

const {
  createVendor,
  getVendor,
  deleteVendor,
  updateVendor,
  vendorLogin,
} = require('./../controllers/vendorControllers');
const router = express.Router();

//  create new vendor
router.route('/').post(createVendor);
router.route('/login').post(vendorLogin);

// get specific  vendor and update , delete the vendor
router.route('/:id').get(getVendor).patch(updateVendor).delete(deleteVendor);

module.exports = router;
