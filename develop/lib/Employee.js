const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    printInfo() {
        console.log(`This employee's name is ${this.name}.`);
        console.log(`This employee's ID number is ${this.id}.`);
        console.log(`This employee's email address is ${this.email}.`);
    }
}
module.exports = Employee;