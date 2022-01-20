const Products = require("../Models/product.model.js");

const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const products = await Products.find().lean().exec();
    return res.status(201).send(products);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id).lean().exec();
    return res.status(201).send(product);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});

module.exports = router;
