const inquirer = require("inquirer");

// Import the parent class
const Employee = require('./Employee');

// Create an `Engineer` class that extends the `Employee` class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.github = github;

        // Define "super" in order for the "extension" to work
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`ID number: ${this.id}`);
        console.log(`Email address: ${this.email}`);
        console.log(`GitHub user name: ${this.github}`);
    }
}

module.exports = Engineer;