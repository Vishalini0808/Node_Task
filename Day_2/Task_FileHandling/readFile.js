// readFile.js
const fs = require('fs');

function readFibonacciFile(filename) {
  const content = fs.readFileSync(filename, 'utf8');
  console.log(` File Content: ${content}`);
}

module.exports = readFibonacciFile;


// Reads the content of fibonacci.txt using fs.readFileSync().
// Displays the text in the console.