const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById} = require("../controller/productControllers")


//@desc get all products from db
//@rout get /api/products
//@access public
router.get('/Cproducts', getAllProducts);


//@desc get a product by id from db
//@rout get /api/products/:id
//@access public
router.get('/Cproducts/:id', getProductById);

module.exports = router;