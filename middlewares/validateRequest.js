import ApiError from '../errors/ApiError.js';

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errorMessage = error.details.map(detail => detail.message).join(', ');
      next(new ApiError(400, errorMessage));
    } else {
      next();
    }
  };
};

export default validateRequest;

