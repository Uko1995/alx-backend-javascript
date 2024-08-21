const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.write('This is the list of our students\n');
        res.end(data);
      })
      .catch((error) => {
        res.end(error.message);
      });
  }
});

const port = 1245;
app.listen(port);

module.exports = app, countStudents;
