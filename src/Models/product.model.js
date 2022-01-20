const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    Img: String,
    hoverImg: String,
    title: String,
    dimensions: String,
    price: String,
    sold: String,
    varient: [
      {
        img: { type: String, required: true },
      },
    ],
    productDetailPage: [{ img: { type: String, required: true } }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = new mongoose.model("products", productSchema);
