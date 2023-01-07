const inquirer = require('inquirer');
const generateHtml= require('./generateHtml'); 
const fs = require('fs');

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
        choices: ['Intern', 'Engineer']
    },
]
function init() { // function to initialize application 
    inquirer.prompt(questions).then((answers) => { 
        let userChoice = answers.member;
        function switchQuestions() {
            if (userChoice === 'Intern') {[
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
                    name: 'internEmail',
                    message: 'Provide intern email',
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school instituation is intern attending?',
                },
            ]} else if (userChoice === 'Engineer') {[
                {
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
        ]}
    }
        const htmlContent = generateHtml(answers); // passing answers to generate HTML function in the generateHtml.js file.
        fs.writeFile('index.html', (htmlContent), (err) => //using 'fs' module to create the README.md file, that is taking in three parameters. File path, data, and callback. 
            err ? console.log(err) : console.log('Successfully created HTML file!') //ternary operator
        );
    });
};
init(); // A call to the entire function.