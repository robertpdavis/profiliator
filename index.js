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

const prompter = new Prompter();
const members = [];

function createMembers() {
    let member;
    let isManager = (members.length === 0);

    prompter.addMember(isManager).then((answerList) => {
        if (isManager) {
            member = new Manager(answerList.mgrName, answerList.mgrId, answerList.mgrEmail, answerList.mgrPhone);
        } else if (answerList.newMember === "Engineer") {
            member = new Engineer(answerList.name, answerList.id, answerList.email, answerList.github);
        } else {
            member = new Intern(answerList.name, answerList.id, answerList.email, answerList.school);
        }

        members.push(member);
        console.log(members);

        if (isManager || answerList.choice) {
            createMembers();
        }
    })
}


function init() {

    createMembers();



}


init();



