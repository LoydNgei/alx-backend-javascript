const express = require('express');

const { readFile } = require('fs');

const app = express();
const hostname = '127.0.0.1';
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error);
      } else {
        let output = '';
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

        const numberOfStudents = length - 1;
        output += `Number of students: ${numberOfStudents}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((output) => {
    res.send(['This is the list of our students', output].join('\n'));
  });
//   }).catch(() => {
//     res.send('This is the list of our students\nCannot load the database');
//   });
});

app.listen(port, hostname, () => {
  console.log('Server running on port 1245...');
});

module.exports = app;
