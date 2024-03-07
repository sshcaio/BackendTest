require('dotenv').config();

const options = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
};

module.exports = {
  development: {
    ...options,
  },
};
