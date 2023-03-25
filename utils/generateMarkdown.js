// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = MIT) {
    return ("https://img.shields.io/badge/License-MIT-yellow.svg");
  }
  else if (license = Apache) {
    return ("https://img.shields.io/badge/License-Apache_2.0-blue.svg")
  }
  else if (license = CCO) {
    return ("https://licensebuttons.net/l/zero/1.0/80x15.png");
  }
  else {
    return ("");
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = MIT) {
    return ("https://opensource.org/licenses/MIT");
  }
  else if (license = Apache) {
    return ("https://opensource.org/licenses/Apache-2.0")
  }
  else if (license = CCO) {
    return ("http://creativecommons.org/publicdomain/zero/1.0/");
  }
  else {
    return ("");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ("");
  }
  else return (license);
}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
//return `# ${data.title}
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
This application is licensed under the ${renderLicenseLink(license)}
## Description

${data.description}

## Table of Contents
## Technology
${data.technology}

## Installation
hat are the steps required to install your project? 
Provide a step-by-step description of how to get the development environment running.
${data.installation}

## Usage
Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an (assets/images/screenshot.png) folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:

${data.usage}

## Contribution
List your collaborators, if any, with links to their GitHub profiles.
${data.contribution}

##License
${data.license}

## Tests
Go extra mile and write tests for your application
${data.tests}

#

${renderLicenseSection(data.license)}
`;
}
module.exports = generateMarkdown;
