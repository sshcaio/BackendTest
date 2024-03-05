const jwt = require('jsonwebtoken');
const { User } = require('../../../models');

const registerService = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};

const loginService = async (email) => {
  const user = await User.findOne({ where: { email } });
  const token = jwt.sign({ id: user.id }, 'secret_key');
  return token;
};
    
module.exports = {
  registerService,
  loginService,
};
