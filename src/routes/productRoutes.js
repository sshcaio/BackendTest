const express = require('express');
const productRouter = express.Router();
const Controller = require('../msc/controllers');

productRouter.get('/', Controller.getAllProducts);
productRouter.get('/:id', Controller.getProductById);
productRouter.post('/', Controller.createProduct);
productRouter.put('/:id', Controller.updateProduct);
productRouter.delete('/:id', Controller.deleteProduct);

module.exports = productRouter;
