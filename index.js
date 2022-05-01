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

//Inquirer class instance
const prompter = new Prompter();
//Array to hold created members
const members = [];

//Creates members from user input prompts and adds to memmbers array
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

        if (isManager || answerList.addAnother) {
            createMembers();
        } else {
            //If no more users to add, render HTML
            renderTeamCards();
        }
    })
}

//Render HTML team member cards
function renderTeamCards() {
    let renderHTML = "";

    if (members.length < 1) {
        return;
    }
    members.forEach((member) => {
        let miscLabel;
        let miscData;

        switch (member.role) {
            case "Manager":
                miscLabel = "Office Number: ";
                miscData = member.officeNumber;
                break;
            case "Engineer":
                miscLabel = "Github: ";
                miscData = member.github;
                break;
            case "Intern":
                miscLabel = "School: ";
                miscData = member.school;
                break;
            default:
        }
        renderHTML = renderHTML +
            `<div class="card">
                        <div class="card-header team-card-header">
                            <h5>${member.name}</h5>
                            <h6>${member.role}</h6>
                        </div>
                        <div class="card-body team-card-body">
                            <h6 class="card-title">ID: ${member.id}</h6>
                            <p class="card-text">Email: <a href="mailto:${member.email}">Send email</a></p>
                            <p class="card-text">${miscLabel}${(member.role = "Engineer") ? '<a href="https://github.com/' + miscData + '" target="_blank">' + miscData + '</a>' : miscData}</p>
                        </div>
                    </div>
                    `;
    })
    saveHTMLFile(pageHTML.replace("%renderHTML%", renderHTML));
}

function saveHTMLFile(HTML) {
    fs.writeFile('./dist/index.html', HTML, (err) => {
        if (err) {
            throw new Error('index.html file cannot be saved');
        }
    });
}

//Initialisation function
function init() {

    //Creates members from user prompts and adds to members global array
    createMembers();


}


init();



