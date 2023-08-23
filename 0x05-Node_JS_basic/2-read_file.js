const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  try {
    const content = fs.readFileSync(fileName, 'utf-8');
    const lines = content.toString().split('\n');

    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        length += 1;
        const field = lines[i].toString().split(',');

        // Count students in each field
        students[field[3]] = (students[field[3]] || []).concat(field[0]);
        fields[field[3]] = (fields[field[3]] || 0) + 1;
      }
    }

    const numberOfStudents = length - 1;
    console.log(`Number of students: ${numberOfStudents}`);

    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
