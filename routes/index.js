import { Router } from 'express';
import userRoutes from './userRoutes.js';
import membershipRoutes from './membershipRoutes.js';
import inventoryRoutes from './inventoryRoutes.js';
import equipmentRoutes from './equipmentRoutes.js';
import facilityRoutes from './facilityRoutes.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/memberships', membershipRoutes);
router.use('/inventories', inventoryRoutes);
router.use('/equipments', equipmentRoutes);
router.use('/facilities', facilityRoutes);

export default router;