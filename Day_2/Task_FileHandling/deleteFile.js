// deleteFile.js
import fs from 'fs';

export default function deleteFile(filename) {
  fs.unlinkSync(filename);
  console.log(`Deleted ${filename}`);
}
