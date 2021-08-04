// Create a function to generate markdown for HTML profile webpage
function generateHtml(employees) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      <link rel="stylesheet" href="./develop/dist/style.css">
    </head>

    <body>
    <h1>My Team</h1>
        ${employees.map(employee => {
        return cardGenerator(employee);
        }).join('')
        }

    </body>
    </html>`
};


// Function
function cardGenerator(employee) {
    return `<div class="card" style="width: 22rem;">
        <div class="card-header">
            <h2 class="card-title">${employee.name}</h2>
            <h2 class="card-title">${addIcon(employee.getRole())}
            ${employee.getRole()}</h2>
        </div>
        <div class="card-body">   
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID number: ${employee.id}</li>
            <li class="list-group-item">E-mail: ${employee.email}</li>
            <li class="list-group-item">Office number: ${employee.getRole() === 'Manager' ? employee.office: 'not available'}</li>
            <li class="list-group-item">GitHub user name: ${employee.getRole() === 'Engineer' ? employee.github: 'not available'}</li>
            <li class="list-group-item">School attending: ${employee.getRole() === 'Intern' ? employee.school: 'not available'}</li>
        </ul>
        </div>
    </div>        
        `
}


// Add icons
function addIcon(role) {
    if (role === 'Manager') {
        return `<i class="icon fas fa-mug-hot"></i>`
    }
    if (role === 'Engineer') {
        return `<i class="icon fas fa-glasses"></i>`
    } else if (role === 'Intern') {
        return `<i class="icon fas fa-graduation-cap"></i>`
    }
};

addIcon();

module.exports = generateHtml;