/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* List all Ledger Entries of an Account
* Returns a list of all Ledger Entries of a given Account, owned by the given Entity 
*
* entityUnderscoreid String Entity ID
* accountUnderscoreid String Account ID
* filter Filter6  (optional)
* sort List  (optional)
* pagination Pagination6  (optional)
* returns inline_response_200_6
* */
const entitiesEntityIdAccountsAccountIdLedgerEntriesGET = ({ entityUnderscoreid, accountUnderscoreid, filter, sort, pagination }) => new Promise(
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
* Get a single Ledger Entry
* Returns a single Ledger Entry identified by its ID of the given Account, owned by the given Entity. 
*
* entityUnderscoreid String Entity ID
* accountUnderscoreid String Account ID
* ledgerUnderscoreentryUnderscoreid String Ledger Entry ID
* returns LedgerEntry
* */
const entitiesEntityIdAccountsAccountIdLedgerEntriesLedgerEntryIdGET = ({ entityUnderscoreid, accountUnderscoreid, ledgerUnderscoreentryUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
        accountUnderscoreid,
        ledgerUnderscoreentryUnderscoreid,
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
  entitiesEntityIdAccountsAccountIdLedgerEntriesGET,
  entitiesEntityIdAccountsAccountIdLedgerEntriesLedgerEntryIdGET,
};
