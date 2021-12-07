var express = require('express');
var router = express.Router();
//Import controllers
var {
    getAllProducts
} = require('../controllers/productsCtrl')

//localhost:3000/api/products
router.route('/')
    .get(getAllProducts)

module.exports = router;