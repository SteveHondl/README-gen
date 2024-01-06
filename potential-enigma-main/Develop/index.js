// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your application?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your application?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide any tests for your application:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
    console.log("README.md generated successfully!");
  });
}

// Function call to initialize app
init();
