const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Định nghĩa route để lấy tất cả sản phẩm
router.get("/", productController.getAllProducts);

module.exports = router;
