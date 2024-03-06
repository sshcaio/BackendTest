const { Product } = require('../../../models');

const getAllProducts = async () => {
  const products = await Product.findAll();
  return products;
};

const getProductById = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

const createProduct = async (body) => {
  const product = await Product.create(body);
  return product;
};

const updateProduct = async (body, id) => {
  const [updated] = await Product.update(body, { where: { id } });
  if (updated) {
    const updatedProduct = await Product.findByPk(id);
    return updatedProduct;
  } else {
    return undefined;
  }
};

const deleteProduct = async (id) => await Product.destroy({ where: { id } });

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
