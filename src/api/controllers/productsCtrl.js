const Product = require('../models/product');
const {query} = require('express');
const {
    successCallback,
    failCallback
} = require('./eventCtrl')

//localhost:3000/api/products?page=1
//Get request with limit product per page
const PAGE_SIZE = 4;
getProducts = async (req, res) => {
    const pageNum = req.query.page;
    const numSkip = (pageNum - 1)*PAGE_SIZE;
    const productPerPage = await Product
        .find()
        .skip(numSkip)
        .limit(PAGE_SIZE)
    res.send(productPerPage)
}

//localhost:3000/api/products
//Post request create new product
createProduct = async (req, res) => {
    try {
        const {name, brand, type, currency, price, description} = req.body;
    
        if(!name || !brand || !type) {
            res.status(400).json(failCallback("Name, Brand and Type are required!!"))
        }

        await Product.create({
            name,
            brand,
            type,
            currency,
            price,
            description
        })

        res.status(200).json(successCallback("Product created!!"))

    } catch (err) {
        res.status(400).json(failCallback(err.message))
    }
}

//localhost:3000/api/products/id
//Put request to update the product
updateProductById = async (req, res) => {
    try {
        const updatedProduct = await Product.findOne({
            _id: req.params.id
        })

        for(const key in req.body) {
            updatedProduct[key] = req.body[key]
        }

        await updatedProduct.save();

        res.send(updatedProduct);

    } catch (err) {
        res.status(400).json(failCallback(err.message))
    }
}

//Delete request to delete a product
deleteProductById = async (req, res) => {
    try {
        await Product.deleteOne({_id: req.params.id})
        res.status(200).json(successCallback('Product deleted'))
    } catch (err) {
        res.status(400).json(failCallback(err.message))
    }
}

module.exports = {getProducts, createProduct, updateProductById, deleteProductById}