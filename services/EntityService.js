/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get a single Entity
* Returns a single Entity found by its ID 
*
* entityUnderscoreid String Entity ID
* returns Entity
* */
const entitiesEntityIdGET = ({ entityUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* List all Entities
* Returns a list of all Entities of this partner 
*
* filter Filter6  (optional)
* sort List  (optional)
* pagination Pagination6  (optional)
* returns inline_response_200_1
* */
const entitiesGET = ({ filter, sort, pagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        filter,
        sort,
        pagination,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create an Entity
* Creates a new Entity of type PERSON owned by the partner. 
*
* inlineObject InlineObject 
* returns Entity
* */
const entitiesPOST = ({ inlineObject }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  entitiesEntityIdGET,
  entitiesGET,
  entitiesPOST,
};
