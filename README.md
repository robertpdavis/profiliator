# profiliator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Node.js application that creates a team profile responsive webpage from console user input. Inquirer package is required. Jest package is used for class unit tests. Install packages by npm install in the console. Start by node index.js.

A video of the application in action can be found here: https://drive.google.com/file/d/1_UUvR6B5IsZaalkc8TD1QQutMpCO_YwI/view 

A video of the tests carried out can be found here: https://drive.google.com/file/d/12_OdE-6QN_FOkyTyMq8d8iqNKrAL3uTq/view

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Licence](#Licence)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Node.js must be installed. The npm Inquirer and Jest testing package are also required. Firstly initialise the npm in the directory for the application by typing npm init in the console. The install dependencies (Inquirer and Jest) by typing npm install. Ensure the package.json files are included in the directory.

File structure of the application:
```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   |── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheets      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```

## Usage
Run the application by typing node index.js in the console. The user is then asked a list of questions to create the the html webpage. The webpage (along with associated CSS style sheets) is then saved in the dist folder.

## Credits
Rob Davis Github: [robertpdavis](https://github.com/robertpdavis)

## Licence
MIT License

## Contributing
Please contact me at: robertpdavis@optusnet.com.au

## Tests
Jest tests are included in the _tests_ subfolder. Unit tests are inlcuded for the following classes:
* Employee.js
* Engineer.js
* Intern.js
* Manager.js

The tests test the initialisation of the classes and class methods.

## Questions
* Github: [robertpdavis](https://github.com/robertpdavis)
* Email: robertpdavis@optusnet.com.au

README file created by ['Easy Readme'](https://github.com/robertpdavis/easy-readme)