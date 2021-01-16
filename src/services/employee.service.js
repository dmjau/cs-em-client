import API from './config.services';

// Create an Object to send the URI to access
const EMPLOYEES_ENDPOINT = {
  EMPLOYEE_DATA: '/employees', // URI to get all employees or post a new employee
  EMPLOYEE_ID: '/employees/' // URI to get employee data by id, edit an employee by id or delete an employee by id
};

export const companyService = {
  // Function to return the list of employees
  getAll: () =>
    new Promise((resolve, reject) => {
      API.get(EMPLOYEES_ENDPOINT.EMPLOYEE_DATA)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  // Function to get an employee by id
  getById: (id) =>
    new Promise((resolve, reject) => {
      API.get(EMPLOYEES_ENDPOINT.EMPLOYEE_ID + id)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  // Function to post a new employee
  postNewEmployee: (data) =>
    new Promise((resolve, reject) => {
      console.log(data);
      API.post(EMPLOYEES_ENDPOINT.EMPLOYEE_DATA, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  // Function to edit an employee by id
  updateById: (data, id) =>
    new Promise((resolve, reject) => {
      API.patch(EMPLOYEES_ENDPOINT.EMPLOYEE_ID + id, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  // Function to delete an employee by id
  deleteById: (id) =>
    new Promise((resolve, reject) => {
      API.delete(EMPLOYEES_ENDPOINT.EMPLOYEE_ID + id)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    })
};
