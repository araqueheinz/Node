// https://www.npmjs.com/package/chalk
const chalk = require('chalk');

// https://www.npmjs.com/package/yargs
const yargs = require('yargs');

// Customize yargs
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'add a new note',
  handler: () => {
    console.log(chalk.green.bold("YARGS - ADDING A NEW NOTE!"));
  }
});

// Remove command
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: () => {
    console.log(chalk.red.bold("YARGS - REMOVING A NOTE!"));
  }
});

// List command
yargs.command({
  command: 'list',
  describe: 'list notes',
  handler: () => {
    console.log(chalk.yellow.bold("YARGS - LISTING NOTES!"));
  }
});

// Read command
yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: () => {
    console.log(chalk.rgb(255, 127, 80).bold("YARGS - READING A NOTE!"));
  }
});

console.log(yargs.argv);
