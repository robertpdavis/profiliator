// Intern class - extends Employee
const employee = require('./Employee');

class Intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email,);
        this.school = school;
        this.role = "Intern";
    }
    // Get school method
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;