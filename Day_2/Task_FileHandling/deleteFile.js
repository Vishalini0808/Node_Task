// deleteFile.js
const fs = require('fs');

function deleteFile(filename) {
  fs.unlinkSync(filename);
  console.log(` Deleted ${filename}`);
}

module.exports = deleteFile;


// Permanently deletes the file using fs.unlinkSync().
// You can call it after all other operations to clean up.