// Manager class - extends Employee
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email,);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    // Get officeNumber method
    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;