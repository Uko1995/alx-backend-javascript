const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      const SWE = [];
      const CS = [];
      if (err) {
        return reject(new Error('Cannot load the database'));
      }
      const students = data.split('\n').filter((line) => line.trim() !== '');
      students.shift();
      console.log(`Number of students: ${students.length}`);
      for (const student of students) {
        const name = student.split(',');
        if (student.includes('CS')) {
          CS.push(name[0]);
        }
        if (student.includes('SWE')) {
          SWE.push(name[0]);
        }
      }
      console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
      console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
      return resolve();
    });
  });
}
module.exports = countStudents;
