const express = require('express');
const authRouter = express.Router();
const { registerController, loginController } = require('../msc/controllers/authController');
const { loginValidation } = require('../msc/middleware/loginMiddleware');

authRouter.post('/register', registerController);
authRouter.post('/login', loginValidation, loginController);

module.exports = authRouter;
