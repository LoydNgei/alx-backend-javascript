export default function createIteratorObject(report) {
  const myArray = [];
  for (const employee of Object.values(report.allEmployees)) {
    myArray.push(...employee);
  }

  return myArray;
}
