import { Router } from 'express';
import { addEquipment, getAllEquipments, updateEquipment, deleteEquipment, getEquipmentById } from '../controllers/equipmentController.js';
import authenticate from '../middlewares/authenticate.js';
import validateRequest from '../middlewares/validateRequest.js';
import { update } from '../services/common.js';
// const { registerSchema, loginSchema, updateProfileSchema } = require('../validations/userSchemas.js');

const router = Router();

router.post('/', addEquipment);
router.get('/', getAllEquipments);
router.get('/:id', getEquipmentById);
router.put('/:id', updateEquipment);
router.delete('/:id', deleteEquipment);



export default router;

