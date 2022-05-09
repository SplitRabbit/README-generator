// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
  return `
  ![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br />
  `} else {
    ""
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `
    ![License Link](https://www.${license}.org/license)<br />
    `} else {
      ""
    };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
    ##Licenses
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    This application is covered by the ${license} license. 
    `} else {
      ""
    };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.projectTitle} 👋</h1>

  ## Description
  🔍 ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  💾 ${data.Installation}
  ## Usage
  💻 ${data.Usage}
  ${renderLicenseSection(data.license)}
  <br />
  ## Contributing
  👪 ${data.ContributionGuidelines}
  ## Tests
  ✏️ ${data.TestInstructions}
  <br />
  :octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  ✉️ Email me with any questions: ${data.email}<br /><br />
  _This README was generated with ❤️ by [README-generator](https://github.com/SplitRabbit/README-generator) _
    `
;
}

module.exports = generateMarkdown;
