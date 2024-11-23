const express = require('express');
const router = require('./routes/index.js'); 
const errorHandler = require('./middlewares/errorHandler.js');
const cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json());

app.use('/api',router);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

