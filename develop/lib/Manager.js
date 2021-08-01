const inquirer = require("inquirer");

// Import the parent class
const Employee = require('./Employee');

// Create a `Manager` class that extends the `Employee` class
class Manager extends Employee {
    constructor(name, id, email, office) {
        this.office = office;

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
        console.log(`Office number: ${this.office}`);
    }
}

module.exports = Manager;