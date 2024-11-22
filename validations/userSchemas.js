const Joi = require( 'joi');

 const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().min(2).max(50).optional()
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

