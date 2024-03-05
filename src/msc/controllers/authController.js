const bcrypt = require('bcrypt');
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
  try {
    const { email } = req.body;
    const token = await Services.loginService(email);
    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
    
module.exports = {
  registerController,
  loginController,
};
