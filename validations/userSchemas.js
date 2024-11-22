const Joi = require( 'joi');

 const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  firstName: Joi.string().min(2).max(50).optional(),
  middleName: Joi.string().min(2).max(50).optional(),
  lastName: Joi.string().min(2).max(50).optional(),
  phone: Joi.string().min(10).max(15).optional(),
  address: Joi.string().min(10).max(100).optional(),
  gender: Joi.string().min(2).max(50).optional(),
  birthday: Joi.date().optional(),
  profilePicture: Joi.string().optional(),
  role: Joi.string().optional()
});

 const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

 const updateProfileSchema = Joi.object({
  email: Joi.string().email().optional(),
  name: Joi.string().min(2).max(50).optional()
}).min(1);

module.exports = { registerSchema, loginSchema, updateProfileSchema };

