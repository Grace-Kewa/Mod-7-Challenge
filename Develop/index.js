// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },

    {
        type: "input",
        message: "What is your Full Name?",
        name: "name"
    },

    {
        type: "input",
        message: "What is your project description?",
        name: "description"
    },

    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation"
    },

    {
        type: "input",
        message: "What is the usage information?",
        name: "usage"
    },

    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution"
    },

    {
        type: "input",
        message: "What are the test instructions?",
        name: "test"
    },
    
    {
        type: "checkbox",
        message:"Please select a license applicable to your project",
        name: "license",
        choices: [
            "MIT",
            "APACHE2.0",
            "GPL3.0",
            "MPL2.0",
            "None"
        ]
    },

    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },

    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log("Generating README...");
        
        writeToFile("./dist/README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
