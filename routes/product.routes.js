const ProductController = require("../controllers/product.controller");
// The Express routes below each use a different function in the product.controller.js file
// so we import all the exports from that file here. 

module.exports = (app) => {
  app.get("/api/products", ProductController.getAllProducts);
  app.post("/api/products", ProductController.createProduct);
  app.get("/api/products/:id", ProductController.getProductById);
  app.patch("/api/products/:id", ProductController.updateProductById);
  app.delete("/api/products/:id", ProductController.deleteProductById);
};

// We export these routes for use in the server.js file