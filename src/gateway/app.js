const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");

// Định nghĩa route để lấy tất cả sản phẩm
app.use("/products", productRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Gateway is running on port ${PORT}`);
});
