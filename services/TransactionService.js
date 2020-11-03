/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* List all Transactions of an Account
* Returns a list of all Transactions of the given Account, owned by the given Entity. 
*
* entityUnderscoreid String Entity ID
* accountUnderscoreid String Account ID
* filter Filter6  (optional)
* sort List  (optional)
* pagination Pagination6  (optional)
* returns inline_response_200_4
* */
const entitiesEntityIdAccountsAccountIdTransactionsGET = ({ entityUnderscoreid, accountUnderscoreid, filter, sort, pagination }) => new Promise(
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
* Cancel a Transaction
* Cancel a Transaction identified by its ID 
*
* entityUnderscoreid String Entity ID
* accountUnderscoreid String Account ID
* transactionUnderscoreid String Transaction ID
* returns Transaction
* */
const entitiesEntityIdAccountsAccountIdTransactionsTransactionIdCancelPOST = ({ entityUnderscoreid, accountUnderscoreid, transactionUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
        accountUnderscoreid,
        transactionUnderscoreid,
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
* Get a single Transaction
* Returns a single Transaction identified by its ID of the given Account, owned by the given Entity. 
*
* entityUnderscoreid String Entity ID
* accountUnderscoreid String Account ID
* transactionUnderscoreid String Transaction ID
* returns Transaction
* */
const entitiesEntityIdAccountsAccountIdTransactionsTransactionIdGET = ({ entityUnderscoreid, accountUnderscoreid, transactionUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
        accountUnderscoreid,
        transactionUnderscoreid,
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
  entitiesEntityIdAccountsAccountIdTransactionsGET,
  entitiesEntityIdAccountsAccountIdTransactionsTransactionIdCancelPOST,
  entitiesEntityIdAccountsAccountIdTransactionsTransactionIdGET,
};
