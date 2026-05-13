const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '');

      const students = lines.slice(1);
      const fields = {};

      students.forEach((student) => {
        const columns = student.split(',');
        const firstName = columns[0].trim();
        const field = columns[columns.length - 1].trim();

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstName);
      });

      const output = [`Number of students: ${students.length}`];

      Object.keys(fields).forEach((field) => {
        const number = fields[field].length;
        const list = fields[field].join(', ');

        output.push(`Number of students in ${field}: ${number}. List: ${list}`);
      });

      resolve(output.join('\n'));
    });
  });
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text/plain');

  countStudents(database)
    .then((studentsOutput) => {
      res.send(`This is the list of our students\n${studentsOutput}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245);

module.exports = app;
