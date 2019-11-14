// https://nodejs.org/dist/latest-v13.x/docs/api/fs.html

// Require the File System Module
const fs = require('fs');
const utils = require('./utils');
const getNotes = require('./notes');

// https://www.npmjs.com/package/validator
const validator = require('validator');

// https://www.npmjs.com/package/chalk
const chalk = require('chalk');

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

console.log(myNotes);

const email = 'heinz@example.com';
const url = 'https://fonda.com';
const notUrl = 'htps://fonda.com';

console.log(`Is ${email} a valid email? `, validator.isEmail(email));
console.log(`Is ${url} a valid email? `, validator.isEmail(url));

console.log(" ");

console.log(`Is ${notUrl} a valid url? `, validator.isURL(notUrl));
console.log(`Is ${url} a valid url? `, validator.isURL(url));


/*
  Run Node
    `node app.js`
*/

