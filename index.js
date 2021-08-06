// Access packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./develop/dist/generateHtml');

// Set up team profiles
const employees = [];
const Employee = require('./develop/lib/Employee');
const Manager = require('./develop/lib/Manager');
const Engineer = require('./develop/lib/Engineer');
const Intern = require('./develop/lib/Intern');


// Array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the name of the Team Member?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the employee ID number of the Team Member?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the email address of the Team Member?',
        name: 'email'
    },
    {
        type: 'checkbox',
        message: 'What is the role of this Team Member?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    // If a Team Manager
    {
        type: 'input',
        message: 'What is the office number of your Team Manager?',
        name: 'office',
        when: (answers) => answers.role[0] === 'Manager'
    },
    // If an Engineer
    {
        type: 'input',
        message: 'What is the GitHub user name of your Engineer?',
        name: 'github',
        when: (answers) => answers.role[0] === 'Engineer'
    },
    // If an Intern
    {
        type: 'input',
        message: 'Which school is your Intern attending?',
        name: 'school',
        when: (answers) => answers.role[0] === 'Intern'
    }
]

// Create a function to run questions again for another Employee
function runAgain() {
    // To continue adding employees
    inquirer.prompt({
            type: 'confirm',
            message: 'Would you like to add another Employee?',
            name: 'add',
        })
        .then(function (addEmployee) {
            // If yes, rerun the questions
            if (addEmployee.add == true) {
                init();
            }
            // If no, render the HTML file
            if (addEmployee.add == false) {
                renderPage(employees);
            };
        });
};

// Create a function to render the HTML page once all Team Members have been added
function renderPage(answers) {
    const fileName = 'index.html';
    const htmlPageContent = generateHtml(answers);
    console.log(employees);

    fs.writeFile(fileName, htmlPageContent, (err) => {
        err ? console.log(err) : console.log('Successfully created HTML webpage')
    });
};

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // Create each employee object depending on role & push to the employees array
            if (answers.role[0] === 'Manager') {
                employees.push(
                    new Manager(answers.name, answers.id, answers.email, answers.office)
                );
            }
            if (answers.role[0] === 'Intern') {
                employees.push(
                    new Intern(answers.name, answers.id, answers.email, answers.school)
                );
            }
            if (answers.role[0] === 'Engineer') {
                employees.push(
                    new Engineer(answers.name, answers.id, answers.email, answers.github)
                );
            }
            runAgain();
        });
}

// Call the function to initialize app
init();