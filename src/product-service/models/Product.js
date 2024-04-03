const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  // Thêm các trường khác nếu cần
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
