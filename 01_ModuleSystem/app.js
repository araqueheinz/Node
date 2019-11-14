// https://nodejs.org/dist/latest-v13.x/docs/api/fs.html

// Require the File System Module
const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created by Node.js');

/* 
  Challenge 
  1. Use appendFileSync to append to file
  2. Run the script
  3. Check
*/

fs.appendFileSync('notes.txt', ' My name is Heinz Araque.');

/* 
  Run Node 
    `node app.js`
*/
