const fs = require('fs');
const { resolve } = require('path');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      let file = '';
      const SWE = [];
      const CS = [];
      if (data) {
        file = fs.readFileSync(path, 'utf8');
        const students = file.split('\n');
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
        resolve();
      } else {
        const error = new Error('Cannot load the database');
        reject(error);
      }
    });
  });
}
module.exports = countStudents;
