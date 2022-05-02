//Inquirer functions class

const inquirer = require("inquirer");

class Prompter {

    addMember(isManager) {
        let questions;

        if (isManager) {
            questions = [
                {
                    type: 'input',
                    message: "Enter the team manager's name:",
                    name: 'mgrName',
                    //validate input
                    validate(answer) {
                        if (answer === "")
                            return "The manager's name is required.";
                        else {
                            return true;
                        }
                    },
                },
                {
                    type: 'input',
                    message: "Enter the team manager's employee ID:",
                    name: 'mgrId',
                    //validate input
                    validate(answer) {
                        if (answer === "")
                            return "You must provide an id for the manager.";
                        else {
                            return true;
                        }
                    },
                },
                {
                    type: 'input',
                    message: 'Enter in an email address for the team manager:',
                    name: 'mgrEmail',
                    //validate input
                    validate: (answer) => {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                        if (!emailRegex.test(answer)) {
                            return "You have to provide a valid email address!"
                        }
                        return true
                    }
                },
                {
                    type: 'input',
                    message: 'Enter in an office number or the team manager:',
                    name: 'mgrPhone',
                    //validate input
                    validate(answer) {
                        if (answer === "")
                            return "You must provide an office number for the manager.";
                        else {
                            return true;
                        }
                    },
                },
            ];

        } else {

            questions = [
                {
                    type: 'list',
                    message: 'Please select the team member type to add to the team:',
                    choices: ['Engineer', 'Intern'],
                    name: 'newMember',
                    //validate input
                    validate(answer) {
                        if (answer === "")
                            return "You must select a role from the list to add.";
                        else {
                            return true;
                        }
                    },
                },
                {
                    type: 'input',
                    message: "Enter the team member's name:",
                    name: 'name',
                    //validate input
                    validate(answer) {
                        if (answer === "")
                            return "The member's name is required.";
                        else {
                            return true;
                        }
                    },
                },
                {
                    type: 'input',
                    message: "Enter the team member's employee ID:",
                    name: 'id',
                    //validate input
                    validate(answer) {
                        if (answer === "")
                            return "You must provide a id for the team member.";
                        else {
                            return true;
                        }
                    },
                },
                {
                    type: 'input',
                    message: 'Please enter in an email address for the team member:',
                    name: 'email',
                    //validate input
                    validate: (answer) => {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                        if (!emailRegex.test(answer)) {
                            return "You have to provide a valid email address!"
                        }
                        return true
                    },
                },
                {
                    type: 'input',
                    message: "Enter the team member's Github username:",
                    name: 'github',
                    when(answers) {
                        return answers.newMember === "Engineer";
                    },
                    //validate input
                    validate(answer) {
                        if (answer === "")
                            return "You must provide a Github username for the engineer.";
                        else {
                            return true;
                        }
                    },
                },
                {
                    type: 'input',
                    message: "Enter the intern's school:",
                    name: 'school',
                    when(answers) {
                        return answers.newMember === "Intern";
                    },
                    //validate input
                    validate(answer) {
                        if (answer === "")
                            return "You must provide a school for the intern.";
                        else {
                            return true;
                        }
                    },
                },
                {
                    type: 'confirm',
                    message: 'Do you wish to enter another team member?',
                    name: 'addAnother'
                }
            ];
        }

        //Run questions, return prompt.
        return inquirer.prompt(questions)
    }
}

module.exports = Prompter;