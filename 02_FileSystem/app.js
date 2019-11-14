/*
  Run Node
    `node app.js add`
*/

// https://www.npmjs.com/package/chalk
const chalk = require('chalk');

// https://www.npmjs.com/package/yargs
const yargs = require('yargs');

// Getting the args from the terminal
console.log(chalk.cyan.bold("1 - PROCESS.ARGV"));
console.log("Get array of argv: ",process.argv);

console.log(" ");

console.log(chalk.blue.bold("2 - PROCESS.ARGV[2]"));
console.log("Get provided argument: ",process.argv[2]);

console.log(" ");

const command = process.argv[2];

if (command === 'add') {
  console.log(chalk.green.bold("A - ADDING NOTE!"));
} else if (command === 'remove') {
  console.log(chalk.red.bold("B - REMOVE NOTE!"));
}

// USING YARGS
console.log(" ");

console.log(chalk.cyan.bold("1 - PROCESS.ARGV"));
console.log("Get array of argv: ", process.argv);

console.log(" ");

console.log(chalk.blue.bold("2 - YARGS.ARGV"));
console.log("yargs.argv: ", yargs.argv);

/*
  TRY
  `node app.js add --title="List of groceries"`
  `node app.js add --help`
*/

