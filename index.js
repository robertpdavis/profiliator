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

//Recursive function to create members from user input prompts and adds toa global memmbers array
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

        console.log(`Team Member ${member.name} created.`)

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
    let role = ""
    let name = "";
    let id = "";
    let email = "";

    //Checks to see if members have been added
    if (members.length < 1) {
        return;
    }
    //Loops through each memeber and appends html text file
    members.forEach((member) => {
        role = member.getRole();
        name = member.getName();
        id = member.getId();
        email = member.getEmail();

        let miscLabel;
        let miscData;

        switch (member.getRole()) {
            case "Manager":
                miscLabel = "Office Number: ";
                miscData = member.getOfficeNum();
                break;
            case "Engineer":
                miscLabel = "Github: ";
                miscData = member.getGithub();
                break;
            case "Intern":
                miscLabel = "School: ";
                miscData = member.getSchool();
                break;
            default:
        }

        renderHTML = renderHTML +
            `<div class="card">
                        <div class="card-header team-card-header">
                            <h5>${name}</h5>
                            <h6>${role}</h6>
                        </div>
                        <div class="card-body team-card-body">
                            <h6 class="card-title">ID: ${id}</h6>
                            <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
                            <p class="card-text">${miscLabel}${(role === "Engineer") ? '<a href="https://github.com/' + miscData + '" target="_blank">' + miscData + '</a>' : miscData}</p>
                        </div>
                    </div>
                    `;
    })
    //Adds creates html text file into the html template which is then sent to saveHTMLFile to save. 
    saveHTMLFile(pageHTML.replace("%renderHTML%", renderHTML));
}

//Function to save the final rendered html file into the dist directory
function saveHTMLFile(HTML) {
    fs.writeFile('./dist/index.html', HTML, (err) =>
        err ? console.error(err) : console.log('Html file saved!')
    );
}

//Initialisation function
function init() {

    //Creates members from user prompts and adds to members global array
    createMembers();


}


init();



