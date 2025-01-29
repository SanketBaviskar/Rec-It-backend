const express = require('express');
const userRoutes = require('./userRoutes.js');
const membershipRoutes = require('./membershipRoutes.js');
const departmentRoutes = require('./departmentRoutes.js');
const inventoryRoutes = require('./inventoryRoutes.js');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/memberships', membershipRoutes);
router.use('/departments', departmentRoutes);
router.use('/inventories', inventoryRoutes);

module.exports = router;