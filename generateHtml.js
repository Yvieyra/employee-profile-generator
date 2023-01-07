// Created a function to generate HTML
function generateHtml(answers) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
      <title>My Team Members </title>
  </head>
  
  <body>
  
      <header class="col-12 text-center">
          <h1>TEAM MEMBER INFORMATION</h1>
      </header>
  
      <main class="container">
          <section class="row justify-content-around">
              <div class="col-12 col-sm-6 col-lg-4 mb-3">
                  <div class="card">
                      <h3 class="card-header bg-success">
                          MANAGER
                      </h3>
                      <div class="card-body">
                          <p class="card-text">
                              Name: ${answers.manager}
                          </p>
                          <p>
                              Employee ID: ${answers.managerId}
                          </p>
                          <p>Email Address: <a href="#" target="_blank">${answers.managerEmail}</a></p> </br>
                          <p>Phone Number: <a href="#">${answers.officeNumber}</a></p>
                      </div>
                  </div>
              </div>
  
              <div class="col-12 col-sm-6 col-lg-4 mb-3">
                  <div class="card">
                      <h3 class="card-header bg-success">
                          ENGINEER
                      </h3>
                      <div class="card-body">
                          <p class="card-text">
                              Name:
                          </p>
                          <p>
                              Employee ID:
                          </p>
                          <p>Email Address: <a href="#" target="_blank">Placeholder</a></p> </br>
                          <p>Github Profile: <a href="#" target="_blank">Placeholder</a></p>
                      </div>
                  </div>
              </div>
  
              <div class="col-12 col-sm-6 col-lg-4 mb-3">
                  <div class="card">
                      <h3 class="card-header bg-success">
                          ENGINEER
                      </h3>
                      <div class="card-body">
                          <p class="card-text">
                              Name:
                          </p>
                          <p>
                              Employee ID:
                          </p>
                          <p>Email Address: <a href="#" target="_blank">Placeholder</a></p> </br>
                          <p>Github Profile: <a href="#" target="_blank">Placeholder</a></p>
                      </div>
                  </div>
              </div>
  
              <div class="col-12 col-sm-6 col-lg-4 mb-3">
                  <div class="card">
                      <h3 class="card-header bg-success">
                          ENGINEER
                      </h3>
                      <div class="card-body">
                          <p class="card-text">
                              Name:
                          </p>
                          <p>
                              Employee ID:
                          </p>
                          <p>Email Address: <a href="#" target="_blank">Placeholder</a></p> </br>
                          <p>Github Profile: <a href="#" target="_blank">Placeholder</a></p>
                      </div>
                  </div>
              </div>
  
              <div class="col-12 col-sm-6 col-lg-4 mb-3">
                  <div class="card">
                      <h3 class="card-header bg-success">
                          INTERN
                      </h3>
                      <div class="card-body">
                          <p class="card-text">
                              Name:
                          </p>
                          <p>
                              Employee ID:
                          </p>
                          <p>
                              School:
                          </p>
                          <p>Email Address: <a href="#" target="_blank">Placeholder</a></p> </br>
                      </div>
                  </div>
              </div>
          </section>
          </div>
          </section>
  
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossorigin="anonymous"></script>
  
  </body>
  
  </html>`
 };
 
 module.exports = generateHtml; // module.exports, an object used to store variables and methods that can be used on the same application and other js files. 