const express = require('express');
const userRoutes = require('./routes/userRoutes.js');
const errorHandler = require('./middlewares/errorHandler.js');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

