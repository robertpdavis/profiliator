// Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
        this.role = "Employee";
    }
    // Get name method
    getName() {
        return this.name;
    }
    // Get id method
    getId() {
        return this.id;
    }
    // Get email method
    getEmail() {
        return this.email;
    }
    // Get role method
    getRole() {
        return this.role;
    }
}

module.exports = Employee;