// Manager class - extends Employee
const employee = require('./Employee');

class Manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email,);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

}

module.exports = Manager;