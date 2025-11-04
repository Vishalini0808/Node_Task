// main.js
const generateFibonacci = require('./generate');
const writeFibonacciToFile = require('./writeFile');
const readFibonacciFile = require('./readFile');
const appendInfo = require('./appendFile');
const deleteFile = require('./deleteFile');

const filename = 'fibonacci.txt';
const n = 10;

//  Generate
const series = generateFibonacci(n);

//  Write
writeFibonacciToFile(filename, series);

//  Read
readFibonacciFile(filename);

//  Append
appendInfo(filename, '\nThis file contains Fibonacci series.');

//  Delete
// Uncomment below to delete the file at the end
// deleteFile(filename);



// It connects all other modules and runs them in order:
// Create Fibonacci series
// Write it to a file
// Read and display the content
// Append an extra note
// (Optional) Delete the file at the end