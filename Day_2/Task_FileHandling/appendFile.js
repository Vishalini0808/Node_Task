// appendFile.js
import fs from 'fs';

export default function appendInfo(filename, message) {
  fs.appendFileSync(filename, `\n${message}`, 'utf8');
  console.log(`Appended message to ${filename}`);
}
