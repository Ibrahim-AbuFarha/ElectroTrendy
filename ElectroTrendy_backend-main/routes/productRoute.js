const express = require('express');
const {deleteProduct ,getProduct ,updateProduct ,createProduct ,getAllProducts ,getVendorProducts} = require("../controllers/productControllers")
const router = express.Router();

// get all products
router.route('/').get(getAllProducts).post(createProduct);

// get specific product
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);



router.route('/vendor/:id').get(getVendorProducts);
module.exports = router;
