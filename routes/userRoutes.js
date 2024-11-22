const express = require('express');
const { register, login, getProfile, updateProfile, deleteUser, allUsers, addUser } = require('../controllers/userController.js');
const authenticate = require('../middlewares/authenticate.js');
const validateRequest = require('../middlewares/validateRequest.js');
const { registerSchema, loginSchema, updateProfileSchema } = require('../validations/userSchemas.js');

const router = express.Router();

router.post('/register', validateRequest(registerSchema), register);
router.post('/login', validateRequest(loginSchema), login);
router.get('/profile', authenticate, getProfile);
router.put('/profile', authenticate, validateRequest(updateProfileSchema), updateProfile);
router.delete('/', authenticate, deleteUser);
router.get('/', authenticate, allUsers);
router.post('/addUser', addUser);

module.exports = router;

