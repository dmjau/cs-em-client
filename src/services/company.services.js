import API from './config.services';

// create an Object to send the URI to access
const COMPANY_ENDPOINT = {
  DATA: '/companies' // URI to get the basic data
};

export const companyService = {
  // function to return the basic data of the company
  getData: () =>
    new Promise((resolve, reject) => {
      API.get(COMPANY_ENDPOINT.DATA)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    })
};