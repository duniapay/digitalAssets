/**
 * The ApprovalRequestController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ApprovalRequestService');
const entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestApprovePOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestApprovePOST);
};

const entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestGET);
};

const entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestPOST);
};


module.exports = {
  entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestApprovePOST,
  entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestGET,
  entitiesEntityIdAccountsAccountIdTransactionsTransactionIdApprovalRequestPOST,
};
