const Product = require('../model/product.model')

const getAllProducts = (req, res) => {
    // this is what will be executed when we navigate to GET /api/products
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err))
}

const createProduct = (req, res) => {
        // this is what will be executed when we navigate to POST /api/products
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports = {getAllProducts, createProduct} // exporting these on one line here. They can also be individually exported above