const { curry } = require('lodash');
const { NotFoundError } = require('rest-api-errors');

const STATUSES = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
};

const sendResponse = (res, data, status = STATUSES.SUCCESS) => res.status(status).json(data).end();

const sendOne = curry((res, entity) => {
  if (!entity) {
    throw new NotFoundError();
  }

  return sendResponse(res, entity);
});

const sendList = (res, entityList) => sendResponse(res, entityList);
const sendCreated = (res, entity) => sendResponse(res, entity);
const sendUpdated = (res, updatedEntity) => sendResponse(res, updatedEntity);
const sendDeleted = res => sendResponse(res, null, STATUSES.NO_CONTENT);
const sendAccepted = res => () => sendResponse(res, null);
const sendRejected = res => () => sendResponse(res, STATUSES.BAD_REQUEST);
const sendNotFound = res => sendResponse(res, null, STATUSES.NOT_FOUND);

module.exports = {
  sendOne,
  sendList,
  sendCreated,
  sendUpdated,
  sendDeleted,
  sendAccepted,
  sendRejected,
  sendNotFound,
};
