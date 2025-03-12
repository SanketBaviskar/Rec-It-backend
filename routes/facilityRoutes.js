import { Router } from 'express';
import { addFacility, getAllFacilities, updateFacility, deleteFacility, getFacilityById } from '../controllers/facilityController.js';
import authenticate from '../middlewares/authenticate.js';
import validateRequest from '../middlewares/validateRequest.js';
import { update } from '../services/common.js';
// const { registerSchema, loginSchema, updateProfileSchema } = require('../validations/userSchemas.js');

const router = Router();

router.post('/', addFacility);
router.get('/', authenticate, getAllFacilities);
router.get('/:id', authenticate, getFacilityById);
router.put('/:id', authenticate, updateFacility);
router.delete('/:id', authenticate, deleteFacility);



export default router;

