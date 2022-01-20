const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    limit: "5000mb",
    extended: true,
    parameterLimit: 100000000000,
  })
);

const productController = require("./Controllers/product.controller");
const cartController = require("./Controllers/cart.controller");

app.use("/products", productController);
app.use("/cart", cartController);

module.exports = app;
