// Engineer class - extends Employee
const employee = require('./Employee');

class Engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email,);
        this.github = github;
        this.role = "Engineer";
    }
    // Get github method
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;