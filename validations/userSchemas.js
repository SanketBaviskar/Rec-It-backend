import { object, string, date } from 'joi';

 const registerSchema = object({
  email: string().email().required(),
  password: string().min(6).required(),
  firstName: string().min(2).max(50).optional(),
  middleName: string().min(2).max(50).optional(),
  lastName: string().min(2).max(50).optional(),
  phone: string().min(10).max(15).optional(),
  address: string().min(10).max(100).optional(),
  gender: string().min(2).max(50).optional(),
  dateOfBirth: date().optional(),
  profilePicture: string().optional(),
  role: string().optional()
});

 const loginSchema = object({
  email: string().email().required(),
  password: string().required()
});

 const updateProfileSchema = object({
  email: string().email().optional(),
  name: string().min(2).max(50).optional()
}).min(1);

export default { registerSchema, loginSchema, updateProfileSchema };

