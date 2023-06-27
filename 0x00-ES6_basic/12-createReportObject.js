/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const [departmentName, employees] of Object.entries(employeesList)) {
    allEmployees[departmentName] = [...employees];
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
