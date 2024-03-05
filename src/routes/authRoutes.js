const express = require('express');
const authRouter = express.Router();
const { registerController } = require('../msc/controllers/authController');
authRouter.post('/register', registerController);

module.exports = authRouter;
