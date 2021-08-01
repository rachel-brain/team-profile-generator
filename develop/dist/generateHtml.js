// Create a function to generate markdown for HTML profile webpage
function generateHtml(answers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" href="./dist/style.css">
    </head>

    <body>
    <h1>My Team</h1>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h2 class="card-title">${answers.name}</h2>
            <h2 class="card-title">Icon ${answers.role}</h2>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID number: ${answers.id}</li>
            <li class="list-group-item">E-mail: ${answers.email}</li>
            <li class="list-group-item">Office number: ${answers.office}</li>
            <li class="list-group-item">GitHub user name: ${answers.github}</li>
            <li class="list-group-item">School attending: ${answers.school}</li>
        </ul>
    </div>
    </body>
    </html>`
};

module.exports = generateHtml;