// import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };

  return reportObject;
}
