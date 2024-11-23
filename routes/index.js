const express = require('express');
const userRoutes = require('./userRoutes.js');
const membershipRoutes = require('./membershipRoutes.js');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/memberships', membershipRoutes);

module.exports = router;