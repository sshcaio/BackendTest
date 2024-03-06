const express = require('express');
const authRouter = express.Router();
const Controller = require('../msc/controllers/authController');
const Middleware = require('../msc/middleware/loginMiddleware');

authRouter.post('/register', Controller.registerController);
authRouter.post('/login', Middleware.loginValidation, Controller.loginController);

module.exports = authRouter;
