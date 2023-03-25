// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const config = require ('./generateMarkdown')
// TODO: Create an array of questions for user input

const questions = [
    {
        type:'input',
        message: "What is the title of your project",
        name: 'title',
    },
    {type: 'input',
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
    name: 'Technology',
  },
  
  
  {
    type: 'Input',
    message: 'Installation',
    name: 'Installation'
  },

  {
    type: 'Input',
    message: 'Please provide usage of this application',
    name:'Usage'
  },
  {
    type: 'Input',
    message: 'Please provide the details of contributors',
    name:'contributors',
    
  },
  {
    type: 'checkbox',
    message: 'License',
    name:'license',
    choices: ['MIT', 'GPL', 'Apache']
  },
  
//   {
//     type: "input",
//     message: 'What is your github username?',
//     name:'github',

  
//   {
//     type: "list",
//     message: 'What is your github userbame',
//     name:'username',
    
//   },
//   {
//     type:'input',
//     message: 'What is your email address?',
//     name: 'email'
//   }

];
inquirer.prompt(questions)
.then((data)=>{

})


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('Readme.md', data)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
