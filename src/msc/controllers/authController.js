const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Services = require('../services');

const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Services.registerService({ username, email, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginController = async (req, res) => {
  return undefined;
};
    
module.exports = {
  registerController,
  loginController,
};
