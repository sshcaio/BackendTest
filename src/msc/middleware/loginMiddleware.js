const bcrypt = require('bcrypt');
const Model = require('../../../models');

const loginValidation = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) response.status(400).json({ message: 'preencha email e senha' });
    const validUser = await Model.User.findOne({ where: { email } });
    if (!validUser) response.status(400).json({ message: 'usuário não encontrado' });
    const validPassword = await bcrypt.compare(password, validUser.password);
    if (!validPassword) response.status(400).json({ message: 'senha inválida' });
    next();
  } catch (error) {
    return response.status(500).json({ message: 'erro de validação' });
  }
};

module.exports = {
  loginValidation,
};
