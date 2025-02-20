const express = require('express');
const userRoutes = require('./userRoutes.js');
const membershipRoutes = require('./membershipRoutes.js');
const inventoryRoutes = require('./inventoryRoutes.js');
const equipmentRoutes = require('./equipmentRoutes.js');
const facilityRoutes = require('./facilityRoutes.js');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/memberships', membershipRoutes);
router.use('/inventories', inventoryRoutes);
router.use('/equipments', equipmentRoutes);
router.use('/facilities', facilityRoutes);

module.exports = router;