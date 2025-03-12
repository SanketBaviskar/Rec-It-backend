import { Router } from 'express';
import { addInventory, getAllInventories, updateInventory, deleteInventory, getInventoryById } from '../controllers/inventoryController.js';
import authenticate from '../middlewares/authenticate.js';
import validateRequest from '../middlewares/validateRequest.js';
import { update } from '../services/common.js';
// const { registerSchema, loginSchema, updateProfileSchema } = require('../validations/userSchemas.js');

const router = Router();

router.post('/', authenticate, addInventory);
router.get('/', authenticate, getAllInventories);
router.get('/:id', authenticate, getInventoryById);
router.put('/:id', authenticate, updateInventory);
router.delete('/:id', authenticate, deleteInventory);



export default router;

