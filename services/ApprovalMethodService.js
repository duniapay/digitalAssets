/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get a single Approval Method
* Returns an Approval Method identified by its ID, owned by the given Entity 
*
* entityUnderscoreid String Entity ID
* approvalUnderscoremethodUnderscoreid String Approval Method ID
* returns ApprovalMethod
* */
const entitiesEntityIdApprovalMethodsApprovalMethodIdGET = ({ entityUnderscoreid, approvalUnderscoremethodUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
        approvalUnderscoremethodUnderscoreid,
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
* List Approval Methods registered for this Entity
* Retrieves a list of Approval Methods that were registered for an Entity with a given ID.  Approval Methods in `ACTIVATED` state can be used to approve Transactions initiated by this Entity.  There are different types of Approval Methods that can be used:  * AUTHY_PUSH * SMS * DSA_ED25519  Entities of type `PERSON` can use ApprovalMethods of type `AUTHY_PUSH` and `SMS`. Entities of type `PARTNER` can use ApprovalMethods of type `DSA_ED25519`. 
*
* entityUnderscoreid String Entity ID
* filter Filter6  (optional)
* sort List  (optional)
* pagination Pagination6  (optional)
* returns inline_response_200_5
* */
const entitiesEntityIdApprovalMethodsGET = ({ entityUnderscoreid, filter, sort, pagination }) => new Promise(
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
* Register a new Approval Method for this Entity
* Registers a new Approval Method for an Entity with a given ID.  There are different Approval Method types available:  * AUTHY_PUSH -- Authy push notifications based MFA method,   it can only be registered for Entities of type PERSON * DSA_ED25519 -- an ECDSA based MFA method,   it can only be registered for Entities of type PARTNER  There can be no more that one Approval Method of each type registered for one particular Entity.  After being registered, the Approval Method is in `PENDING` state until it is activated by the platform operator, or by an external service, e.g. Authy.  Approval Method in `ACTIVATED` state can be used to approve Transactions initiated by this Entity. 
*
* entityUnderscoreid String Entity ID
* inlineObject4 InlineObject4 
* returns ApprovalMethod
* */
const entitiesEntityIdApprovalMethodsPOST = ({ entityUnderscoreid, inlineObject4 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
        inlineObject4,
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
  entitiesEntityIdApprovalMethodsApprovalMethodIdGET,
  entitiesEntityIdApprovalMethodsGET,
  entitiesEntityIdApprovalMethodsPOST,
};
