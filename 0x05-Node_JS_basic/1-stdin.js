// create program that interacts in the terminal

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (name) => {
  process.stdout.write(`Your name us : ${name}`);
  if (!process.stdin.isTTY) {
    console.log('This important software is closing');
  }
  process.exit(0);
});
process.stdin.setEncoding('utf8');
