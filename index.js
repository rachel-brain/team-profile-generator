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
        choices: [' Manager', ' Engineer', ' Intern']
    },
    // If a Team Manager
    {
        type: 'input',
        message: 'What is the office number of your Team Manager?',
        name: 'office',
        when: (answers) => answers.role === ' Manager'
    },
    // If an Engineer
    {
        type: 'input',
        message: 'What is the GitHub user name of your Engineer?',
        name: 'github',
        when: (answers) => answers.role === ' Engineer'
    },
    // If an Intern
    {
        type: 'input',
        message: 'Which school is your Intern attending?',
        name: 'school',
        when: (answers) => answers.role === ' Intern'
    }
]

// Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//         .then((answers) => {

//             const fileName = 'index.html';
//             const htmlPageContent = generateHtml(answers);

//             // Create a function to write HTML file
//             fs.writeFile(fileName, htmlPageContent, (err) => {
//                 err ? console.log(err) : console.log('Successfully created HTML')
//             });
//         });
// }

// const fileName = 'index.html';
// const htmlPageContent = generateHtml(answers);

function runAgain() {
    // To continue adding employees
    inquirer.prompt({
            type: 'confirm',
            message: 'Would you like to add another Employee?',
            name: 'add',
        })
        .then(function (addEmployee) {
            // If yes, rerun the questions
            if (addEmployee.again == true) {
                init();
            }
            // If no, render the HTML file
            if (addEmployee.again == false) {
                renderPage();
            };
        });
};

function renderPage(answers) {
    const fileName = 'index.html';
    const htmlPageContent = generateHtml(answers);

    fs.writeFile(fileName, htmlPageContent, (err) => {
        err ? console.log(err) : console.log('Successfully created HTML')
    });
};

// Create a function to initialize app
function init() {
    // inquirer.prompt(questions.employee)
    inquirer.prompt(questions)
        .then((answers) => {
            // Create each employee object depending on role & push to the employees array
            if (answers.role === ' Manager') {
                employees.push(
                    new Manager(answers.name, answers.id, answers.email, answers.office)
                );
            }
            if (answers.role === ' Intern') {
                employees.push(
                    new Intern(answers.name, answers.id, answers.email, answers.school)
                );
            }
            if (answers.role === ' Engineer') {
                employees.push(
                    new Engineer(answers.name, answers.id, answers.email, answers.github)
                );
            }
            runAgain();
        });
}

// Call the function to initialize app
init();