var express = require('express');
var router = express.Router();
//Import controllers
var {
    getProducts,
    createProduct,
    updateProductById,
    deleteProductById
} = require('../controllers/productsCtrl')

//localhost:3000/api/products
router.route('/')
    .get(getProducts)
    .post(createProduct)

router.route('/:id')
    .put(updateProductById)
    .delete(deleteProductById)

module.exports = router;