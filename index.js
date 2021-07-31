// Access packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./utils/generateHtml');



// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option

// SEPARATE QUESTIONS FOR MANAGER/INTERN/ENGINEER, etc?


// Array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the name of the Team Member?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the employee ID number of the Team Member?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email address of the Team Member?',
        name: 'email',
    },
    {
        type: 'checkbox',
        message: 'What is the position of this Team Member?',
        name: 'position',
        choices: [' Manager', ' Engineer', ' Intern', ' Other'],
    },
    // If a Team Manager
    {
        type: 'input',
        message: 'What is the office number of your Team Manager?',
        name: 'office',
    },


]