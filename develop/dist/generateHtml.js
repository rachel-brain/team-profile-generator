// Create a function to generate markdown for HTML profile webpage
function generateHtml(answers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" href="./develop/dist/style.css">
    </head>

    <body>
    <h1>My Team</h1>
    <div class="card" style="width: 22rem;">
        <div class="card-header">
            <h2 class="card-title">${answers.name}</h2>
            <h2 class="card-title"><i class="icon"></i>${answers.role}</h2>
        </div>
        <div class="card-body">   
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID number: ${answers.id}</li>
            <li class="list-group-item">E-mail: ${answers.email}</li>
            <li class="list-group-item">Office number: ${answers.office}</li>
            <li class="list-group-item">GitHub user name: ${answers.github}</li>
            <li class="list-group-item">School attending: ${answers.school}</li>
        </ul>
        </div>
    </div>
    </body>
    </html>`
};

// Add icons
function addIcon(role) {
    if (role === ' Manager') {
        return `<i class="fas fa-mug-hot"></i>`
    }
    if (role === ' Engineer') {
        return `<i class="fas fa-glasses"></i>`
    } else if (role === ' Intern') {
        return `<i class="fas fa-graduation-cap"></i>`
    }
};

addIcon();

module.exports = generateHtml;