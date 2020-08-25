var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
inquirer.prompt([
//title, description, toc, install, usage, license, contributing, tests, questions
    {
        type: "input",
        name: "Title",
        message: "Project Title?",
    },
    {
        type: "input",
        name: "Description",
        message: "Project Description?",
    },
    {
        type: "input",
        name: "Installation",
        message: "How do you install it?",
    },
    {
        type: "input",
        name: "Usage",
        message: "Instructions for use?",
    },
    {
        type: "list",
        name: "License",
        message: "License?",
        choices: [
            "Apache 2.0",
            "GNU General Public 3.0",
            "MIT",
            "BSD 3",
        ]
    },
    {
        type: "input",
        name: "Contributors",
        message: "Contributors?",
    },
    {
        type: "input",
        name: "Test",
        message: "Tests?",
    },
    {
        type: "input",
        name: "Questions",
        message: "Contact for further questions",
    }


]).then(function(data) {

// function to write README file
    fs.writeFile(fileName, JSON.stringify(data, null, '/t'), function(err) {
        if (err) {
            throw err;
        }
        console.log("Success!")
    })
}

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
