/* eslint-disable max-len */
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  // seu código aqui
  if (employeeName) {
    const employee = data.employees;
    return employee.find((CurrentEmployee) => CurrentEmployee.firstName === employeeName || CurrentEmployee.lastName === employeeName);
  }
  return {};
  // const employee = data.employees;
  // return employee.find((CurrentEmployeLast) => CurrentEmployeLast.lastName === employeeName);
};

module.exports = getEmployeeByName;
