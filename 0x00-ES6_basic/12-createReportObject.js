/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(employeesList) {
  employeesList = createEmployeesObject();
  return employeesList;
}
