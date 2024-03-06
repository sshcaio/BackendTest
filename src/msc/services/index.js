const { registerService, loginService } = require("./authService");
const {
  getAllProducts, getProductById, createProduct,
  updateProduct, deleteProduct
} = require("./productService");


module.exports = {
  loginService,
  registerService,
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
