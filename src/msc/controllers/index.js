const { registerController, loginController } = require("./authController");
const { getAllProducts, getProductById, createProduct,
  updateProduct, deleteProduct } = require("./productController");

module.exports = {
  loginController,
  registerController,
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
