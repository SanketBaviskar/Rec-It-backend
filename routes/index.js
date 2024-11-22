const express = require('express');
const userRoutes = require('./userRoutes.js');;

const router = express.Router();

router.use('/users', userRoutes);

module.exports = router;