// create a function that reads a file synchronously

const fs = require('fs');

function countStudents(path) {
  const CS = [];
  const SWE = [];
  let file = '';
  try {
    file = fs.readFileSync(path, 'utf-8');
    const students = file.split('\n').filter((line) => line.trim() !== '');
    students.shift();
    console.log(`Number of students: ${students.length}`);
    for (const student of students) {
      if (student.includes('CS')) {
        const name = student.split(',');
        CS.push(name[0]);
      }
      if (student.includes('SWE')) {
        const name = student.split(',');
        SWE.push(name[0]);
      }
    }
    console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
    console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
  }
}

module.exports = countStudents;
