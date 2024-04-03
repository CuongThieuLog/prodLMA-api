const express = require("express");
const router = express.Router();
const axios = require("axios");

// Định nghĩa route để lấy tất cả sản phẩm
router.get("/", async (req, res) => {
  try {
    const productsResponse = await axios.get("http://localhost:8000/products");
    res.json(productsResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

module.exports = router;
