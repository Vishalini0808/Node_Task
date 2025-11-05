// writeFile.js
import fs from 'fs';

export default function writeFibonacciToFile(filename, data) {
  fs.writeFileSync(filename, data.join(', '), 'utf8');
  console.log(`Fibonacci series written to ${filename}`);
}
