const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.connect((err) => {
  if (err) console.error('connection error', err.stack);
  console.log('connected');
});

module.exports = connection;
