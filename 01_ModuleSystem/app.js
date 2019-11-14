/*
  Run Node
    `node app.js`
*/

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

console.log('My name is ', utils.name, 'and it was required from the utils.js file');

const a = 7;
const b = 9;
const sum = utils.add(a, b);

console.log(`The sum of ${a} + ${b} is`, sum, 'and it was a required function from the utils.js file');
console.log(" ");

/*
  Challenge
  1. Create a new file, notes.js
  2. Create getNotes Function that returns your notes
  3. export get notes
  4. check
*/

const myNotes = getNotes();

console.log('this notes came from notes.js file. ', myNotes);
console.log(" ");

const email = 'heinz@example.com';
const url = 'https://fonda.com';
const notUrl = 'htps://fonda.com';

console.log(`Is ${email} a valid email? `, validator.isEmail(email));
console.log(`Is ${url} a valid email? `, validator.isEmail(url));

console.log(" ");

console.log(`Is ${notUrl} a valid url? `, validator.isURL(notUrl));
console.log(`Is ${url} a valid url? `, validator.isURL(url));

console.log(" ");
console.log(chalk.blue("Using Chalk npm package"));
console.log(" ");

/*
  Challenge
  1. Install version 2.4.1 of chalk // npm i chalk@2.4.1
  2. Load, import, require chalk into app.js
  3. Use it to console.log "Success!" in green
  4. check
*/

const success = chalk.green.inverse.bold("Success!");
console.log(success);

/*
  Run Node
    `node app.js`
*/

