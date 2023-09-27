const mongoose = require('mongoose');

// The following creates a schema with mongoose for our Product DB
// I used all string types. I'm not sure if price should be something else.
// Tried 'Double' for the price, but that didn't work.
const ProductSchema = new mongoose.Schema(
    //validations will go in here...
    {
        title: {type: String},
        price: {type: Number},
        description: {type: String}
    }, {timestamps: true}
);

const productModel = mongoose.model('Product', ProductSchema) 
module.exports = productModel

// here we export the 'model' ProductSchema with the name 'Product'
// then we can use Product.find(), Product.create(), Product.delete(), etc.