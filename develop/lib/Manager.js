const inquirer = require("inquirer");

// Import the parent class
const Employee = require('./Employee');

// Create a `Manager` class that extends the `Employee` class
class Manager extends Employee {
    constructor(name, id, email, office) {

        // if one of the items is undefined throw an error - COMPLETE THIS FOR EACH TEAM MEMBER

        // Define "super" in order for the "extension" to work
        super(name, id, email);

        this.office = office;
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;