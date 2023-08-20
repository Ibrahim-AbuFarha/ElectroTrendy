const express = require('express');
const { signIn, signUp } = require('../controllers/authController');
const {
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} = require('./../controllers/customerControllers');
const router = express.Router();

//create new vendor
router.route('/').post(createCustomer);

router.route('/signup').post(signUp);
router.route('/signin').post(signIn);
//get specific  vendor and update , delete the vendor
router
  .route('/:id')
  .get(getCustomer)
  .patch(updateCustomer)
  .delete(deleteCustomer);

module.exports = router;
