import express from 'express';
const router = require('./routes/index.js').default; 
const errorHandler = require('./middlewares/errorHandler.js').default;
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

