const express = require("express");
const router = express.Router();

const ProductController = require("./product_controller");

router.get("/products", ProductController.getProducts);

module.exports = router;
