import { Router } from 'express';
import { addMembership, getAllMemberships, updateMembership, deleteMembership, assignMembershipToUser } from '../controllers/membershipController.js';
import authenticate from '../middlewares/authenticate.js';
import validateRequest from '../middlewares/validateRequest.js';
import { update } from '../services/common.js';
// const { registerSchema, loginSchema, updateProfileSchema } = require('../validations/userSchemas.js');

const router = Router();

router.post('/', addMembership);
router.get('/', authenticate, getAllMemberships);
router.put('/:id', authenticate, updateMembership);
router.delete('/:id', authenticate, deleteMembership);
router.post('/assignMembershipToUser', assignMembershipToUser);



export default router;

