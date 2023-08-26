const { readFile } = require('fs');

module.exports = function readDatabase(filePath) {
  const students = {};
  // eslint-disable-next-line no-unused-vars
  let length = 0;
  const fields = {};
  return new Promise((resolve, reject) => {
    readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            // Count students in each field
            students[field[3]] = (students[field[3]] || []).concat(field[0]);
            fields[field[3]] = (fields[field[3]] || 0) + 1;
          }
        }
      }
      resolve(students);
    });
  });
};
