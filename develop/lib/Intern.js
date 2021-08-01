const inquirer = require("inquirer");

// Import the parent class
const Employee = require('./Employee');

// Create an `Intern` class that extends the `Employee` class
class Intern extends Employee {
    constructor(name, id, email, school) {
        this.school = school;

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
        console.log(`School attending: ${this.school}`);
    }
}

module.exports = Intern;