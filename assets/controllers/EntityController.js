/**
 * The EntityController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/EntityService');
const entitiesEntityIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.entitiesEntityIdGET);
};

const entitiesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.entitiesGET);
};

const entitiesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.entitiesPOST);
};


module.exports = {
  entitiesEntityIdGET,
  entitiesGET,
  entitiesPOST,
};
