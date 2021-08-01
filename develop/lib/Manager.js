const inquirer = require("inquirer");

// Import the parent class
const Employee = require('./Employee');

// Create a `Manager` class that extends the `Employee` class
class Manager extends Employee {
    constructor(name, id, email, office) {

        // Define "super" in order for the "extension" to work
        super(name, id, email);

        this.office = office;
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return ' Manager';
    }
};

module.exports = Manager;