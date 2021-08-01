# team-profile-generator
A Node.js command-line application which takes in employee information and generates a team profile on an HTML webpage

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
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




    
## Installation
The application will be invoked by typing the following command in the terminal to install inquirer:

```bash
npm i inquirer
```

Then, typing the following command in the terminal will initiate the prompts to collate the information required in the HTML webpage:

```bash
node index.js
```
    
## Usage
The user will be presented with a series of prompts about their Team Members which s/he will answer until the information is complete for each Employee.  A message will be seen in the terminal saying "Successfully created HTML".  The user will then open the index.html file in their browser to see their team profile page.




## GitHub Url
github/rachel-brain/team-profile-generator