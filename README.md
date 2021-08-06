# team-profile-generator
A Node.js command line application which takes in employee information and generates a team profile on an HTML webpage.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description
An app that quickly and easily creates a HTML webpage by using a Node.js command line application to present a number of prompts for the user to answer which then generates one. The application uses the node module packages 'Inquirer' for collecting input from the user and 'Jest' for running the unit tests.
    
## Motivation
To have an app allowing a Manager to collate and present useful contact information for their team which can easily updated, added to and shared amongst the team.

## User Story

```md
AS A Manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their email addresses and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Video Instructions
* Video of walk-through of team profile generator:
https://drive.google.com/file/d/1mKeqvjTe7OX5KfM6dQaSL_bx2DEswff9/view

* Video of walk-through of tests of the generator code run by 'Jest':
https://drive.google.com/file/d/1tOg7Q5NUjxlRefUE53qFkcYnLSXvdtGG/view


* Video of example team profile generated:
https://drive.google.com/file/d/1VE4KwBWlkqIsTn-RCB8j-H1vyNAmT-so/view

    
## Installation
The application will be invoked by typing the following command in the terminal to install 'Inquirer':

```bash
npm i inquirer
```

Then, typing the following command in the terminal to initiate the prompts to collate the information required in the HTML webpage:

```bash
node index.js
```

Then, typing the following commands in the terminal to install 'Jest' and then run the tests to verify that the program is running correctly for each Team Member inputted:

```bash
npm i jest
npm run test
```
    
## Usage
The user will be presented with a series of prompts about their Team Members which s/he will answer until the information is complete for each Employee.  A message will be seen in the terminal saying "Successfully created HTML webpage".  The user will then open the index.html file in their browser to see their team profile page.

## License
MIT

## GitHub Url
https://github.com/rachel-brain/team-profile-generator
