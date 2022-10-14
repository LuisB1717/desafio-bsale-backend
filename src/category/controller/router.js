const express = require("express");
const router = express.Router();

const CategoryController = require("./category_controller");

router.get("/categories", CategoryController.getAll);

module.exports = router;
