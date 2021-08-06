const inquirer = require("inquirer");

// Import the parent class
const Employee = require('./Employee');

// Create an `Engineer` class that extends the `Employee` class
class Engineer extends Employee {
    constructor(name, id, email, github) {

        // Define "super" in order for the "extension" to work
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        if (typeof github !== "string") {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;