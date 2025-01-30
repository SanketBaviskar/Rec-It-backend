const express = require('express');
const { addInventory, getAllInventories, updateInventory, deleteInventory, getInventoryById } = require('../controllers/inventoryController.js');
const authenticate = require('../middlewares/authenticate.js');
const validateRequest = require('../middlewares/validateRequest.js');
const { update } = require('../services/common.js');
// const { registerSchema, loginSchema, updateProfileSchema } = require('../validations/userSchemas.js');

const router = express.Router();

router.post('/', authenticate, addInventory);
router.get('/', authenticate, getAllInventories);
router.get('/:id', authenticate, getInventoryById);
router.put('/:id', authenticate, updateInventory);
router.delete('/:id', authenticate, deleteInventory);



module.exports = router;

