import { Router } from 'express';
import { register, login, getProfile, updateProfile, deleteUser, allUsers, addUser } from '../controllers/userController.js';
import authenticate from '../middlewares/authenticate.js';
import validateRequest from '../middlewares/validateRequest.js';
import { registerSchema, loginSchema, updateProfileSchema } from '../validations/userSchemas.js';

const router = Router();

router.post('/register', validateRequest(registerSchema), register);
router.post('/login', validateRequest(loginSchema), login);
router.get('/profile', authenticate, getProfile);
router.put('/profile', authenticate, validateRequest(updateProfileSchema), updateProfile);
router.delete('/', authenticate, deleteUser);
router.get('/', authenticate, allUsers);
router.post('/addUser', addUser);

export default router;

