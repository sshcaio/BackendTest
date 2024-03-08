// app.js
const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://example.com"); // Replace with your domain
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use('/auth', routes.authRouter);
app.use('/products', routes.productRouter);

app.get('/', (_req, res) => {
  res.json({
    message: 'working!'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
