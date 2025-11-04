// writeFile.js
const fs = require('fs');

function writeFibonacciToFile(filename, data) {
  fs.writeFileSync(filename, data.join(', '), 'utf8');
  console.log(` Fibonacci series written to ${filename}`);
}

module.exports = writeFibonacciToFile;


//Uses Node’s fs.writeFileSync() to create a file.
// Converts the array into a comma-separated string.
// Saves it into the given filename (fibonacci.txt).