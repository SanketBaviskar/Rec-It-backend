const express = require('express');
const { addMembership, getAllMemberships, updateMembership, deleteMembership, assignMembershipToUser } = require('../controllers/membershipController.js');
const authenticate = require('../middlewares/authenticate.js');
const validateRequest = require('../middlewares/validateRequest.js');
const { update } = require('../services/common.js');
// const { registerSchema, loginSchema, updateProfileSchema } = require('../validations/userSchemas.js');

const router = express.Router();

router.post('/', addMembership);
router.get('/', authenticate, getAllMemberships);
router.put('/:id', authenticate, updateMembership);
router.delete('/:id', authenticate, deleteMembership);
router.post('/assignMembershipToUser', assignMembershipToUser);



module.exports = router;

