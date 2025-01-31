const express = require('express');
const { addEquipment, getAllEquipments, updateEquipment, deleteEquipment, getEquipmentById } = require('../controllers/equipmentController.js');
const authenticate = require('../middlewares/authenticate.js');
const validateRequest = require('../middlewares/validateRequest.js');
const { update } = require('../services/common.js');
// const { registerSchema, loginSchema, updateProfileSchema } = require('../validations/userSchemas.js');

const router = express.Router();

router.post('/', addEquipment);
router.get('/', getAllEquipments);
router.get('/:id', getEquipmentById);
router.put('/:id', updateEquipment);
router.delete('/:id', deleteEquipment);



module.exports = router;

