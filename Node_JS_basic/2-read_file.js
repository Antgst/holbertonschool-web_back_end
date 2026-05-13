const fs = require("fs");

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, "utf8");
  } catch {
    throw new Error("Cannot load the database");
  }

  const lines = data.split("\n").filter((line) => line.trim() !== "");

  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  const fields = {};

  students.forEach((student) => {
    const columns = student.split(",").map((column) => column.trim());

    const firstname = columns[0];
    const field = columns[columns.length - 1];

    if (!fields[field]) {
      fields[field] = [];
    }

    fields[field].push(firstname);
  });

  Object.keys(fields).forEach((field) => {
    const number = fields[field].length;
    const list = fields[field].join(", ");

    console.log(`Number of students in ${field}: ${number}. List: ${list}`);
  });
}

module.exports = countStudents;
