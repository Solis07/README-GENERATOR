// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    // Title section
    type: "input",
    name: "title",
    message: "Project's Title:",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please provide a project name.");
        return false;
      }
    },
  },

  {
    // Description section
    type: "input",
    name: "description",
    message: "Project's Description:",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please provide a description of your project.");
        return false;
      }
    },
  },

  {
    // Github section
    type: "input",
    name: "github",
    message: "Github name:",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Must provide a github name.");
        return false;
      }
    },
  },

  {
    // Email section
    type: "input",
    name: "email",
    message: "Enter in your email:",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please provide an email.");
        return false;
      }
    },
  },

  {
    // Installation section
    type: "input",
    name: "installation",
    message: "How do you Install and Run the Project?",
  },

  {
    // Usage section
    type: "input",
    name: "usage",
    message: "How do you use the Project?",
  },

  {
    // License section
    type: "list",
    name: "license",
    message: "Add a license:",
    choices: ["Apache License 2.0", "MIT License", "Mozilla License 2.0"],
  },

  {
    // Contributing section
    type: "input",
    name: "contributing",
    message: "Enter contribution covenant and contribution guide.",
  },

  {
    // Test section
    type: "input",
    name: "test",
    message: "Include tests:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README created!'));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
