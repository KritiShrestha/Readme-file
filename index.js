// Include packages needed for this application by importing inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

// Importing generateMarkdown.js file
const generateMarkdown = require('./utils/generateMarkdown');

//  Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please provide description of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the technologies used?',
    name: 'technology',
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Please provide instructions and usage of this application.',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Please provide the details of contributors.',
    name: 'contribution',
  },
  {
    type: 'list',
    message: 'Please select one of the license:',
    name: 'license',
    choices: ['MIT', 'Apache', "CCO", "Eclipse", "GNU", ""]
  },
  {
    type: "input",
    message: 'Write down the tests of your application.',
    name: 'test',
  },
  {
    type: "input",
    message: 'What is your github username?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  }
];

//  Creating a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Sucessfully generated Readme file')
  )
}

//  Creating a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdownContent = generateMarkdown(data)
    writeToFile('README.MD', markdownContent);
  });
}

// Function call to initialize app
init();
