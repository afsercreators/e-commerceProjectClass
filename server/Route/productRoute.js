const express = require("express");
const route = express.Router();

// // import controllar
const {
  CreateProduct,
  getProduct,
  getOneProduct,
  deletProduct,
  updateProduct,
} = require("../Controller/productController");

// // api
route.get("/", getProduct);
route.post("/", CreateProduct);
route.patch("/:id", updateProduct);
route.delete("/:id", deletProduct);
route.get("/:id", getOneProduct);

// export
module.exports = route;
