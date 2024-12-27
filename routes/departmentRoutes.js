const express = require('express');
const { addDepartment, getAllDepartments, updateDepartment, deleteDepartment, assignDepartmentToUser } = require('../controllers/departmentController.js');
const authenticate = require('../middlewares/authenticate.js');
const validateRequest = require('../middlewares/validateRequest.js');
const { update } = require('../services/common.js');
// const { registerSchema, loginSchema, updateProfileSchema } = require('../validations/userSchemas.js');

const router = express.Router();

router.post('/', addDepartment);
router.get('/', authenticate, getAllDepartments);
router.put('/:id', authenticate, updateDepartment);
router.delete('/:id', authenticate, deleteDepartment);
router.post('/assignDepartmentToUser', assignDepartmentToUser);



module.exports = router;

