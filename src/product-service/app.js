const express = require("express");
const connectDB = require("./config/database");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Kết nối với cơ sở dữ liệu
connectDB();

// Sử dụng route cho việc lấy tất cả sản phẩm
app.use("/products", productRoutes);

module.exports = app;
