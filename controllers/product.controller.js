const Product = require("../model/product.model");

// So far, I've seen 3 different syntaxes for exporting, I tried playing with the different ways on this page...
// It seems like you can't mix and match the ways of exporting modules. Maybe it all has to be the same technique in a given file?
// The model file shows a different way

module.exports = {
  getAllProducts: (req, res) => {
    // this is what will be executed when we navigate to GET /api/products
    Product.find({}) // passing in an empty object, could leave it as find()
      .then((allProducts) => {
        // allProducts is the successful result of promise
        res.json(allProducts); // convert result of promise to JSON
      })
      .catch((err) => {
        // 'err' is the result of the promise if *rejected*
        console.log(err);
        res.json(err);
      });
  },
  getProductById: (request, result) => {
    // This is executed when we navigate to GET /api/products/:id
    Product.findOne({ _id: request.params.id }) // req.params come from the 'route'
      .then((product) => {
        console.log(product);
        result.json(product);
      })
      .catch((error) => {
        console.log(error);
        res.json(error);
      });
  },
  createProduct: (req, res) => {
    // this is what will be executed when we navigate to POST /api/products
    Product.create(req.body)
      .then((newProduct) => res.json(newProduct))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  updateProductById: (req, res) => {
    // this will be executed on the PATCH /app/products/:id route
    Product
    .findOneAndUpdate({_id: req.params.id}, req.body, {new:true})  // the 3rd argument {new:true} means that the Mongoose method will return the updated document as a response rather than the orginal one.
    .then(updatedProduct => {
      console.log(updatedProduct);
      res.json(updatedProduct);
    })
    .catch(err => console.log(err))
  },
  deleteProductById: (req, res) => {
    // this will be executed on the DELETE /app/products/:id route
    Product
    .findOneAndDelete({_id: req.params.id})
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => console.log(err))
  },
};