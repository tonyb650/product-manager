const express = require('express');
const cors = require('cors'); // this needs to also be installed with npm
const app = express();
const port = 8000;

app.use(express.json(), express.urlencoded({ extended: true }), cors()); // this could be split into 3 lines if preferred
// express.json() -> this is middleware that allows us to read JSON objects sent in the client's request
// express.urlencoded({ extended: true }) -> This is middleware that allows us to read JSON objects with strings and arrays in the client's request
// cors() -> This allows different ports to send requests to our API (not just port 8000)

require('./config/mongoose.config') // this is the line that calls upon the config file to start up the mongodb connection 

const productRoutes = require('./routes/product.routes') // We are assigning the imported function to a variable
productRoutes(app); // We are invoking the function and passing it 'app' (The 'express' library)
// The above two lines could be shortened to this: require('./routes/product.routes')(app);
// Further explanation: "We require our routes folder which has a function (with an app parameter). The express method must be added as an argument."

app.listen(port, () => console.log(`Express is listening on port ${port}`)); // calls the Express 'listen' function