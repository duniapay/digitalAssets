/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a Withdrawal
* Issues a request to create a new Withdrawal Transaction from the given Account, owned by the given Entity.  The required `reference` attribute serves as idempotency key, and MUST be unique across all Transactions initiated by the partner.  If a request is issued twice with the same attributes, including the value of the `reference` attribute, the second response will be the same as the first one, and only one Withdrawal Transaction will be created as the effect.  In the request to issue a Withdrawal either the `amount` or the `total_amount` MUST be specified. If the `amount` is specified, it indicates the \"transacted amount\", i.e. the exact amount that will be sent to the given address on the blockchain. If the `total_amount` is specified, it indicates the amount that will be deducted from the Account Balance, the amount that will be sent to the recipient on the blockchain is determined after the fees are calculated and applied. Specifying the `total_amount` is useful in case it is desired to withdraw the whole Balance of the Account.  The successful response of the Withdrawal request contains a reference to a Transaction, which will *eventually* be created. If right after the partner tries to get this single Transaction by its ID and receives a `\"404 Not found\"` response, it is advised to repeat the attempt after some (rather short) period of time. 
*
* entityUnderscoreid String Entity ID
* accountUnderscoreid String Account ID
* inlineObject2 InlineObject2 
* returns TransactionRequestResponse
* */
const entitiesEntityIdAccountsAccountIdTransactionsWithdrawalPOST = ({ entityUnderscoreid, accountUnderscoreid, inlineObject2 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entityUnderscoreid,
        accountUnderscoreid,
        inlineObject2,
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
  entitiesEntityIdAccountsAccountIdTransactionsWithdrawalPOST,
};
