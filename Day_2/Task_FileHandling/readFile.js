// readFile.js
import fs from 'fs';

export default function readFibonacciFile(filename) {
  const content = fs.readFileSync(filename, 'utf8');
  console.log(`File Content: ${content}`);
}
