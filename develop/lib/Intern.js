const inquirer = require("inquirer");

// Import the parent class
const Employee = require('./Employee');

// Create an `Intern` class that extends the `Employee` class
class Intern extends Employee {
    constructor(name, id, email, school) {

        // Define "super" in order for the "extension" to work
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return ' Intern';
    }
};

module.exports = Intern;