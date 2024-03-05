// app.js
const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use('/auth', routes.authRouter)

app.get('/', (_req, res) => {
  res.json({
    message: 'working!'
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
