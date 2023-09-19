/* eslint-disable linebreak-style */
const readline = require('readline');

const readLINE = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

readLINE.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  process.exit();
});
process.on('exit', () => {
  console.log('This important software is now closing');
});
