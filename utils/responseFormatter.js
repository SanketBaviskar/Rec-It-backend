const formatResponse = (status, statusCode, data = null, message = null) => {
    try {
      return {
        status,
        code: statusCode,
        data,
        message,
      };
    } catch (error) {
      console.error('Error formatting response:', error.message);
      throw new Error('Failed to format response');
    }
  };
  
  const normalizeData = (data) => {
    try {
      // Wrap arrays in an object with a key `items`
      if (Array.isArray(data)) {
        return { items: data };
      }
      return data;
    } catch (error) {
      console.error('Error normalizing data:', error.message);
      throw new Error('Failed to normalize data');
    }
  };
  
  const sendSuccessResponse = (res, statusCode, data, message = null) => {
    try {
      const normalizedData = normalizeData(data);
      const formattedResponse = formatResponse('success', statusCode, normalizedData, message);
      res.status(statusCode).json(formattedResponse);
    } catch (error) {
      console.error('Error sending success response:', error.message);
      if (!res.headersSent) {
        res
          .status(500)
          .json(
            formatResponse('error', 500, null, 'An internal server error occurred while sending the success response.')
          );
      }
    }
  };
  
  const sendErrorResponse = (res, statusCode, message, data = null) => {
    try {
      const normalizedData = normalizeData(data);
      const formattedResponse = formatResponse('error', statusCode, normalizedData, message);
      res.status(statusCode).json(formattedResponse);
    } catch (error) {
      console.error('Error sending error response:', error.message);
      if (!res.headersSent) {
        res
          .status(500)
          .json(
            formatResponse('error', 500, null, 'An internal server error occurred while sending the error response.')
          );
      }
    }
  };
  
  module.exports = {
    sendSuccessResponse,
    sendErrorResponse,
  };
  