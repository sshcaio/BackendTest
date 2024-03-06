const Service = require('../services');

const getAllProducts = async (_req, res) => {
  try {
    const products = await Service.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    console.log(Service);
    const product = await Service.getProductById(req.params.id);
    console.log(product);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message)
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Service.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updated = await Service.updateProduct(req.body, req.params.id);
    if (!updated) res.status(404).json({ message: 'produto não encontrado' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { params: { id } } = req;
    await Service.deleteProduct(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
