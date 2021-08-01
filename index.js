// Access packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./dist/generateHtml');


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
        message: 'What is the role of this Team Member?',
        name: 'role',
        choices: [' Manager', ' Engineer', ' Intern'],
    },
    // If a Team Manager
    {
        type: 'input',
        message: 'What is the office number of your Team Manager?',
        name: 'office',
    },
    // If an Engineer
    {
        type: 'input',
        message: 'What is the GitHub user name of your Engineer?',
        name: 'github',
    },
    // If an Intern
    {
        type: 'input',
        message: 'Which school is the Intern attending?',
        name: 'school',
    },
    // To continue adding employees
    {
        type: 'confirm',
        message: 'Would you like to add another Employee?',
        name: 'add',
    }
]


getName();
getID();
getEmail();
getRole();
getOffice();
getGithub();
getSchool();

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const fileName = 'index.html';
            const htmlPageContent = generateHtml(answers);

            // Create a function to write HTML file
            fs.writeFile(fileName, htmlPageContent, (err) => {
                err ? console.log(err) : console.log('Successfully created HTML')
            });
        });
}

// Call the function to initialize app
init();