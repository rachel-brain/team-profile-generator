const inquirer = require("inquirer");

// Import the parent class
const Employee = require('./Employee');

// Create an `Engineer` class that extends the `Employee` class
class Engineer extends Employee {
    constructor(name, id, email, github) {

        // if one of the items is undefined throw an error - COMPLETE THIS FOR EACH TEAM MEMBER

        // Define "super" in order for the "extension" to work
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;