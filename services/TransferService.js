/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a Transfer
* Issues a request to create a new Transfer from the given Account, owned by the given Entity, to another Account in the same Asset. Transfers can only be initiated from Accounts of `isolation` `POOLED`.  Two Transactions are created in the course of processing a Transfer: one Transaction of type TRANSFER_OUTGOING in the sender Account, and a corresponding Transaction of type TRANSFER_INCOMING in the receiver Account. The second, Transfer (Incoming) Transaction, is only created if and when the first one, Transfer (Outgoing), is successfully completed.  The required `reference` attribute serves as idempotency key, and MUST be unique across all Transactions initiated by the partner.  If a request is issued twice with the same attributes, including the value of the `reference` attribute, the second response will be the same as the first one, and only one Transfer Transaction will be created as the effect.  In the request to issue a Transfer either the `amount` or the `total_amount` MUST be specified. If the `amount` is specified, it indicates the \"transacted amount\", i.e. the exact amount that will be sent to the recipient Account. If the `total_amount` is specified, it indicates the amount that will be deducted from the Account Balance, the amount that will be sent to the recipient is determined after the fees are calculated and applied. Specifying the `total_amount` is useful in case it is desired to transfer the whole Balance of the Account.  The successful response of the Transfer request contains a reference to a Transaction, which will *eventually* be created. If right after the partner tries to get this single Transaction by its ID and receives a `\"404 Not found\"` response, it is advised to repeat the attempt after some (rather short) period of time. 
*
* entityUnderscoreid String Entity ID
* accountUnderscoreid String Account ID
* inlineObject3 InlineObject3 
* returns TransactionRequestResponse
* */
const entitiesEntityIdAccountsAccountIdTransactionsTransferPOST = ({ entityUnderscoreid, accountUnderscoreid, inlineObject3 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
        accountUnderscoreid,
        inlineObject3,
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
  entitiesEntityIdAccountsAccountIdTransactionsTransferPOST,
};
