const formatResponse = (status, statusCode, data = null, message = null) => {
    return {
        status,
        code: statusCode,
        data,
        message
    };
};

const normalizeData = (data) => {
    // Wrap arrays in an object with a key `items`
    if (Array.isArray(data)) {
        return { items: data };
    }
    return data;
};

const sendSuccessResponse = (res, statusCode, data, message = null) => {
    const normalizedData = normalizeData(data);
    res.status(statusCode).json(formatResponse('success', statusCode, normalizedData, message));
};

const sendErrorResponse = (res, statusCode, message, data = null) => {
    const normalizedData = normalizeData(data);
    res.status(statusCode).json(formatResponse('error', statusCode, normalizedData, message));
};

module.exports = {
    sendSuccessResponse,
    sendErrorResponse
};

