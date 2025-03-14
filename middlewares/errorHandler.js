import { sendErrorResponse } from '../utils/responseFormatter';

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';

  sendErrorResponse(res, statusCode, message);
};

export default errorHandler;
