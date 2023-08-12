// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    // Title of Project
    type: "input",
    name: "title",
    message: "Title of Project:",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please provide a project name.");
        return false;
      }
    }
  },

  {
    // Description of Project
    type: "input",
    name: "description",
    message: "Provide a description of your project.",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please provide a description of your project.");
        return false;
      }
    }
  },

  



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
