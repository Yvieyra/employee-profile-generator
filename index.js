const inquirer = require('inquirer');
const managerHtml= require('./lib/Manager'); 
const fs = require('fs');
const engineerHtml = require('./lib/Engineer')
const internHtml = require('./lib/Intern')

function engineerQuestions() {
const engineer = [{
                type: 'input',
                name: 'engineerName',
                message: 'Please enter engineer name',
            },
            {
                type: 'number',
                name: 'engineerId',
                message: 'Enter employee ID',
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter engineer email address',
            },
            {
                type: 'input',
                name: 'githubUrl',
                message: 'Please provide engineer Github URL link',
            },
]
inquirer.prompt(engineer).then((answers) => { 
    const engineerContent = engineerHtml(answers); // passing answers to generate HTML function in the generateHtml.js file.
    fs.appendFile('./dist/index.html', (engineerContent), (err) => //using 'fs' module to create the HTML.md file, that is taking in three parameters. File path, data, and callback. 
        err ? console.log(err) : console.log('Successfully appeneded answers to HTML') //ternary operator
    );
});
};

function internQuestions() {
const intern = [ 
    {
            type: 'input',
            name: 'internName',
            message: 'Please enter intern name',
        },
        {
            type: 'number',
            name: 'internId',
            message: 'Enter intern Id',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school instituation is intern attending?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Provide intern email',
        },
]
inquirer.prompt(intern).then((answers) => { 
    const internContent = internHtml(answers); // passing answers to generate HTML function in the generateHtml.js file.
    fs.appendFile('./dist/index.html', (internContent), (err) => //using 'fs' module to create the HTML.md file, that is taking in three parameters. File path, data, and callback. 
        err ? console.log(err) : console.log('Successfully appeneded answers to HTML') //ternary operator
    );
});
};
    
const questions = [
    {
        type: 'input',
        name: 'manager',
        message: 'Please enter manager name',
    },
    {
        type: 'number',
        name: 'managerId',
        message: 'Enter employee ID',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter manager email address',
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: 'Enter manager office number',
    },
    {
        type: 'list',
        name: 'member',
        message: 'Please select your next team member',
        choices: ['intern', 'engineer']
    },
    {
        type: 'list',
        name: 'member',
        message: 'Please select your next team member',
        choices: ['intern', 'engineer', 'team is now complete']
    },
]
function init() { // function to initialize application 
    inquirer.prompt(questions).then((answers) => { 
        let userChoice = answers.member;
        function switchQuestions() {
            if (userChoice === 'intern') {
                console.log("intern")
                internQuestions();
                return;
    
        } else if (userChoice === 'engineer') {
                console.log("engineer")
                engineerQuestions();
                return;
    }
    
    }
        switchQuestions();
        const managerContent = managerHtml(answers); // passing answers to generate HTML function in the generateHtml.js file.
        fs.writeFile('./dist/index.html', (managerContent), (err) => //using 'fs' module to create the HTML.md file, that is taking in three parameters. File path, data, and callback. 
            err ? console.log(err) : console.log('Successfully created HTML file!') //ternary operator
        );
    });
};
init(); // A call to the entire function.
