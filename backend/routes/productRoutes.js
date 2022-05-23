const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById, updateProductCountById } = require('../controllers/productControllers')

// get all products from db
// GET /api/products
router.get('/', getAllProducts);

// get a products by id from db
// GET /api/products/id
router.get('/:id', getProductById);

// update product inventory by id
// PUT /api/products
router.put('/update', updateProductCountById)



module.exports = router;