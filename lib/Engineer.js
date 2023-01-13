const inquirer = require("inquirer"); //allowing us to use inquirer package from node modules 
module.exports = engineerHtml; //allows file to be used in another filed if it is "required"

// Created a function to append to HTML File 
function engineerHtml (answers) {
    return `<div class="col-12 col-sm-6 col-lg-4 mb-3">
    <div class="card">
        <h3 class="card-header bg-success">
            ENGINEER
        </h3>
        <div class="card-body">
            <p class="card-text">
                Name: ${answers.engineerName}
            </p>
            <p>
                Employee ID: ${answers.engineerId}
            </p>
            <p>Email Address: <a href="mailto:${answers.engineerEmail}" target="_blank">${answers.engineerEmail}</a></p> </br>
            <p>Github Profile: <a href="${answers.githubUrl}" target="_blank">${answers.githubUrl}</a></p>
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
}