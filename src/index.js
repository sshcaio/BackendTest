// app.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
