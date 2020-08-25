var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
const questions = [
//title, description, toc, install, usage, license, contributing, tests, questions
    {
        type: "input",
        message: "Project Title?",
        name: "Title"
    },
    {
        type: "input",
        message: "Project Description?",
        name: "Description"
    },
    {
        type: "input",
        message: "How do you install it?",
        name: "Installation"
    },
    {
        type: "input",
        message: "Instructions for use?",
        name: "Usage"
    },
    {
        type: "list",
        message: "License?",
        name: "License",
        choices: [
            "Apache 2.0",
            "GNU General Public 3.0",
            "MIT",
            "BSD 3",
        ]
    },
    {
        type: "input",
        message: "Contributors?",
        name: "Contributors",
    },
    {
        type: "input",
        message: "Tests?",
        name: "Test"
    },
    {
        type: "input",
        message: "Contact for further questions",
        name: "Questions"
    }


];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
