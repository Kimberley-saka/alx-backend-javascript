/* eslint-disable linebreak-style */
/* eslint-disable prefer-promise-reject-errors */
// returns a promise

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('a promise');
    reject('error');
  });
}

export default getResponseFromAPI;
