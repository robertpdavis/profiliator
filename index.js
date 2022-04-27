// const Employee = require('./lib/Employee');

// const employee = new Employee('Fred', 1, 'fred@company.com');

// console.log(`Name: ${employee.name}`);

const Manager = require('./lib/Manager');

const manager = new Manager('Fred', 1, 'fred@company.com', '1234 5678');

console.log(`Name: ${manager.getRole()}`);
