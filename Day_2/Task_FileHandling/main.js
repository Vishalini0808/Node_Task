// main.js
import generateFibonacci from './generate.js';
import writeFibonacciToFile from './writeFile.js';
import readFibonacciFile from './readFile.js';
import appendInfo from './appendFile.js';
import deleteFile from './deleteFile.js';

const filename = 'fibonacci.txt';
const n = 10;

// Generate
const series = generateFibonacci(n);

// Write
writeFibonacciToFile(filename, series);

// Read
readFibonacciFile(filename);

// Append
appendInfo(filename, '\nThis file contains Fibonacci series.');

// Delete (optional)
// deleteFile(filename);
