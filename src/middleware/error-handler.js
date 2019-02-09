/* eslint max-params: 0 */
const { APIError, InternalServerError } = require('rest-api-errors');
const { STATUS_CODES } = require('http');

const getErrorHandler = ({ logger }) => (err, req, res, next) => {
  const error = (err.status === 401 || err instanceof APIError)
    ? err : new InternalServerError();

  if (process.env.NODE_ENV !== 'production') {
    logger.warn(err);
  }

  if (err.name === 'ValidationError') {
    res.status(405).json(err);
    return next();
  }

  res.status(error.status || 500)
    .json({
      code: error.code || 500,
      message: error.message || STATUS_CODES[error.status],
    });

  return next();
};

module.exports = getErrorHandler;
