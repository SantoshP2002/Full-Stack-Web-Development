const express = require("express");
const productRouter = express.Router();

const addProductController = require("../controllers/product/addProduct.controller");
const getAllProductController = require("../controllers/product/getAllProduct.controller");
const updateProductController = require("../controllers/product/updateProduct.controller");
const deleteProductController = require("../controllers/product/deleteProduct.controller");

productRouter.post("/add-product", addProductController);
productRouter.get("/get-all-product", getAllProductController);
productRouter.patch("/update-product", updateProductController);
productRouter.delete("/delete-product", deleteProductController);

module.exports = productRouter