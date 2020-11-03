/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get a single Address
* Returns a single Address identified by its ID, linked with the given Account, owned by the given Entity. 
*
* entityUnderscoreid String Entity ID
* accountUnderscoreid String Account ID
* addressUnderscoreid String Address ID
* returns Address
* */
const entitiesEntityIdAccountsAccountIdAddressesAddressIdGET = ({ entityUnderscoreid, accountUnderscoreid, addressUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
        accountUnderscoreid,
        addressUnderscoreid,
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
* List all Addresses of an Account
* Returns a list of all Addresses linked with the given Account, owned by the given Entity 
*
* entityUnderscoreid String Entity ID
* accountUnderscoreid String Account ID
* filter Filter6  (optional)
* sort List  (optional)
* pagination Pagination6  (optional)
* returns inline_response_200_3
* */
const entitiesEntityIdAccountsAccountIdAddressesGET = ({ entityUnderscoreid, accountUnderscoreid, filter, sort, pagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
        accountUnderscoreid,
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
* Create an Address
* Creates a new Address linked with the given Account, owned by the given Entity.  As the Account is associated with a single Asset the new Address is created for this particular Asset.  No additional parameters are required to create a new Address. This Address can immediately be used to receive funds on the blockchain. 
*
* entityUnderscoreid String Entity ID
* accountUnderscoreid String Account ID
* returns Address
* */
const entitiesEntityIdAccountsAccountIdAddressesPOST = ({ entityUnderscoreid, accountUnderscoreid }) => new Promise(
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

module.exports = {
  entitiesEntityIdAccountsAccountIdAddressesAddressIdGET,
  entitiesEntityIdAccountsAccountIdAddressesGET,
  entitiesEntityIdAccountsAccountIdAddressesPOST,
};
