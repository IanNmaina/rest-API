const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3500;

app.use(bodyParser.json());

// Removed useNewUrlParser and useUnifiedTopology options
mongoose.connect('mongodb://127.0.0.1:27017/product');
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use("/products", require("./routes/products"));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
