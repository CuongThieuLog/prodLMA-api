const Product = require("../models/Product");

async function getAllProducts() {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
}

module.exports = { getAllProducts };
