/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get a single Account
* Returns an Account identified by its ID, owned by the given Entity 
*
* entityUnderscoreid String Entity ID
* accountUnderscoreid String Account ID
* returns Account
* */
const entitiesEntityIdAccountsAccountIdGET = ({ entityUnderscoreid, accountUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
        accountUnderscoreid,
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
* List all Accounts of an Entity
* Returns a list of all Accounts owned by the given Entity 
*
* entityUnderscoreid String Entity ID
* filter Filter6  (optional)
* sort List  (optional)
* pagination Pagination6  (optional)
* returns inline_response_200_2
* */
const entitiesEntityIdAccountsGET = ({ entityUnderscoreid, filter, sort, pagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
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
* Create an Account
* Creates a new Account owned by the given Entity.  When creating an Account a valid Asset ID must be provided. 
*
* entityUnderscoreid String ID of the Entity the new Account belongs to
* inlineObject1 InlineObject1 
* returns Account
* */
const entitiesEntityIdAccountsPOST = ({ entityUnderscoreid, inlineObject1 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
        inlineObject1,
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
  entitiesEntityIdAccountsAccountIdGET,
  entitiesEntityIdAccountsGET,
  entitiesEntityIdAccountsPOST,
};
