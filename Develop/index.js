var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
inquirer.prompt([
//title, description, toc, install, usage, license, contributing, tests, questions
    {
        type: "input",
        name: "title",
        message: "Project Title?",
    },
    {
        type: "input",
        name: "description",
        message: "Project Description?",
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install it?",
    },
    {
        type: "input",
        name: "usage",
        message: "Instructions for use?",
    },
    {
        type: "list",
        name: "license",
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
        name: "contributors",
        message: "Contributors?",
    },
    {
        type: "input",
        name: "test",
        message: "Tests?",
    },
    {
        type: "input",
        name: "questions",
        message: "Contact for further questions",
    }


]).then(function(data) {

// function to write README file
    fs.writeFile("README.md", generateMarkdown(data), function(err) {
        if (err) {
            throw err;
        }
        console.log("Success!")
    })
})

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

function generateMarkdown(data) {
    return `
# Title
${data["title"]}
## Description
${data["description"]}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Installation <a name="installation"></a>
${data["installation"]}

## Usage <a name="usage"></a>
${data["usage"]}

## License <a name="license"></a>
${data["license"]}

## Contributors <a name="contributors"></a>
[${data["contributors"]}](${data["contributors"]})

## Tests <a name="test"></a>
${data["test"]}

## Questions <a name="questions"></a>
[${data["questions"]}](${data["questions"]})
`;
}  
