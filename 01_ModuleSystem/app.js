// https://nodejs.org/dist/latest-v13.x/docs/api/fs.html

// Require the File System Module
const fs = require('fs');
const utils = require('./utils');
const getNotes = require('./notes');

fs.writeFileSync('notes.txt', 'This file was created by Node.js');

/* 
  Challenge 
  1. Use appendFileSync to append to file
  2. Run the script
  3. Check
*/

fs.appendFileSync('notes.txt', ' My name is Heinz Araque.');

console.log(utils.name);

const sum = utils.add(7, 9);

console.log(sum);

/*
  Challenge
  1. Create a new file, notes.js
  2. Create getNotes Function that returns your notes
  3. export get notes
  4. check
*/

const myNotes = getNotes();

console.log(myNotes)

/*
  Run Node
    `node app.js`
*/