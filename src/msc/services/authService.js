const { User } = require('../../../models');

const registerService = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};

const loginService = async (req, res) => {
  return undefined;
};
    
module.exports = {
  registerService,
  loginService,
};
