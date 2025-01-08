const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const ProductsModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productRegPrice: {
    type: String,
    required: true,
  },
  ProductDiscountPrice: {
    type: String,
    required: true,
  },
  ProductDetails: {
    type: String,
  },
});

const Products = mongoose.model("Products", ProductsModel);
module.exports = Products;
