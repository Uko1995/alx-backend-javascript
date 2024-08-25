/* eslint-disable consistent-return */
function getPaymentTokenFromAPI(success) {
  if (success === true) {
    return Promise.resolve({ data: 'Succesful response from the API' });
  }
}
module.exports = getPaymentTokenFromAPI;
