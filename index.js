//Assign node local and 3rd party packages
const fs = require('fs');

//Load classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Prompter = require('./lib/Prompter');

//Load other files
const pageHTML = require('./src/template.js');



// const Employee = require('./lib/Employee');

// const employee = new Employee('Fred', 1, 'fred@company.com');

// console.log(`Name: ${employee.name}`);


const manager = new Manager('Fred', 1, 'fred@company.com', '1234 5678');

console.log(`Name: ${manager.getRole()}`);

console.log("ok");




