const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Returning answers from input
    getName() {
        if (typeof name !== "string") {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        return this.name;
    }

    getId() {
        if (typeof id !== "number") {
            throw new Error("Expected parameter 'id' to be a number");
        }
        return this.id;
    }

    getEmail() {
        if (typeof email !== "string") {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;