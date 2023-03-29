//  Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  else if (license === "Apache") {
    return "![Apache License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  }
  else if (license === "CCO") {
    return "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";
  }
  else if (license === "Eclipse") {
    return "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)"
  }
  else if (license === "GNU") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  }
  // If there is no license, return an empty string
  else
    return "";
}

//  Creating a function that returns the license link
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  }
  else if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  }
  else if (license === "CCO") {
    return "http://creativecommons.org/publicdomain/zero/1.0/";
  }
  else if (license === "Eclipse") {
    return "https://opensource.org/licenses/EPL-1.0)"
  }
  else if (license === "GNU") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  }
  // If there is no license, return an empty string
  else {
    return "";
  }
}

// Creating a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  //Creating a template literals to display contents in a Readme file
  if(license=== ""){
    return`
## License
No license selected`
  }
  else {
  return `
## License
This application is licensed under the [${license}](${licenseLink}) license`
  }
}

//  Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license)
  const licenseSection = renderLicenseSection(data.license)
  return `# ${data.title} ${badge}

## Description
${data.description}

## Table of Contents

- [Technology](#technology)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)
- [Test](#test)
- [Qustions](#questions)

## Technology
${data.technology}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}
${licenseSection}

## Test
${data.test}

## Questions
You can find me on Github at [${data.username}](https://github.com/${data.username})

Feel free to reach me out at ${data.email} if you have any additional questions`
}

//Exporting a generateMarkdown file to index.js
module.exports = generateMarkdown;
