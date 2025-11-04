// appendFile.js
const fs = require('fs');

function appendInfo(filename, message) {
  fs.appendFileSync(filename, `\n${message}`, 'utf8');
  console.log(` Appended message to ${filename}`);
}

module.exports = appendInfo;


// Opens the existing file and adds a new line at the end.
// Does not overwrite the original content.