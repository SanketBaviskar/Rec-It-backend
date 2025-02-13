const express = require('express');
const { addFacility, getAllFacilities, updateFacility, deleteFacility, getFacilityById } = require('../controllers/facilityController.js');
const authenticate = require('../middlewares/authenticate.js');
const validateRequest = require('../middlewares/validateRequest.js');
const { update } = require('../services/common.js');
// const { registerSchema, loginSchema, updateProfileSchema } = require('../validations/userSchemas.js');

const router = express.Router();

router.post('/', addFacility);
router.get('/', authenticate, getAllFacilities);
router.get('/:id', authenticate, getFacilityById);
router.put('/:id', authenticate, updateFacility);
router.delete('/:id', authenticate, deleteFacility);



module.exports = router;

