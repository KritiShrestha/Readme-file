// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const generateReadme = require ('./generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
  {
    type: 'input',
    message: "What is the title of your project",
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please provide description of your project',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the table of contents',
    name: 'contents',
  },
  {
    type: 'input',
    message: 'What are the technologies Used?',
    name: 'technology',
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Please provide instructions and usage of this application.Include screenshots by providing a path to it',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Please provide the details of contributors',
    name: 'contributors',
  },
  {
    type: 'list',
    message: 'License',
    name: 'license',
    choices: ['MIT', 'Apache', "CCO", "Eclipse", "GNU"]
  },
  {
    type: "input",
    message: 'Write the test for your application',
    name: 'test',
  },
  {
    type: "input",
    message: 'What is your github username',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Sucessfully generated Readme file')
  )
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdownContent = generateMarkdown(data)
    writeToFile('README.MD', markdownContent);
  });
}

// Function call to initialize app
init();
