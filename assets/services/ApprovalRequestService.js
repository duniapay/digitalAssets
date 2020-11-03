/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Approve an ApprovalRequest of type `DSA_ED25519`
* To approve a Transaction – using an ApprovalRequest of type `DSA_ED25519` – the Account holder (an Entity owning the Account), MUST compute a response based on the previously retrieved challenge. The response is posted with this request.  See Transaction Approvals description [API Guide](API_Guide.md) on how to compute the response for a particular approval method. 
*
* entityUnderscoreid String Entity ID
* accountUnderscoreid String Account ID
* transactionUnderscoreid String Transaction ID
* inlineObject6 InlineObject6 
* returns ApprovalRequest
* */
const entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestApprovePOST = ({ entityUnderscoreid, accountUnderscoreid, transactionUnderscoreid, inlineObject6 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
        accountUnderscoreid,
        transactionUnderscoreid,
        inlineObject6,
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
* Retrieves the ApprovalRequest for the given Transaction
* Fetches the ApprovalRequest for an outgoing Transaction identified by given `transaction_id`. 
*
* entityUnderscoreid String Entity ID
* accountUnderscoreid String Account ID
* transactionUnderscoreid String Transaction ID
* returns ApprovalRequest
* */
const entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestGET = ({ entityUnderscoreid, accountUnderscoreid, transactionUnderscoreid }) => new Promise(
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
* Requests an ApprovalRequest for a Transaction
* Requests the creation of an AppprovalRequest for the given Transaction.  To approve a Transaction, the Account holder (the Entity owning the Account) MUST provide a second factor approval before the Transaction is processed.  The second factor approval depends on the ApprovalMethod and the type of the Transaction.  The ApprovalMethod depends directly on the type of the Entity which owns the Transaction's Account:  * for Entities of type PERSON  -- the approval method is either `AUTHY_PUSH` or `SMS` * for Entities of type PARTNER -- the approval method is `DSA_ED25519` 
*
* entityUnderscoreid String Entity ID
* accountUnderscoreid String Account ID
* transactionUnderscoreid String Transaction ID
* inlineObject5 InlineObject5 
* returns ApprovalRequest
* */
const entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestPOST = ({ entityUnderscoreid, accountUnderscoreid, transactionUnderscoreid, inlineObject5 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
        accountUnderscoreid,
        transactionUnderscoreid,
        inlineObject5,
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
  entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestApprovePOST,
  entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestGET,
  entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestPOST,
};
