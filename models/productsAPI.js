const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    img_url: { type: String },
    price: { type: Number },
    categories: { type: String }
  },
  { collection: "products" }
);

// adds a method to a user document object to create a hashed password

const product = mongoose.model("product", productSchema);
module.exports = product;
