/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get a single Asset
* Returns a single Asset found by its ID 
*
* assetUnderscoreid String Asset ID
* returns Asset
* */
const assetsAssetIdGET = ({ assetUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        assetUnderscoreid,
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
* List all Assets
* Returns a list of all Digital Assets supported by the platform. 
*
* filter Filter6  (optional)
* sort List  (optional)
* pagination Pagination6  (optional)
* returns inline_response_200
* */
const assetsGET = ({ filter, sort, pagination }) => new Promise(
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

module.exports = {
  assetsAssetIdGET,
  assetsGET,
};
