const mongoose = require('mongoose');
const dbName = "product";

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
    useNewUrlParser: true, //still need to understand this argument for mongoose.connect function
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the Mongo Product DB"))
    .catch(err => console.log("Error connecting to MongoDB", err));