//TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Apache 2.0":
      return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "Mozilla Public License 2.0":
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
    case "BSD 3":
      return "![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
    default:
      // If no license is selected
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[License MIT](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[License Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
    case "Mozilla Public License 2.0":
      return "[License MPL 2.0](https://opensource.org/licenses/MPL-2.0)";
    case "BSD 3":
      return "[License BSD 3](https://opensource.org/licenses/BSD-3) ";
    default:
      // If no license is selected
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License\n  This project is licensed under the\n  ${renderLicenseLink(
      license
    )}
    `;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, you can reach me at [GitHub: ${
    data.username
  }](https://github.com/${data.username}) or contact me via email at ${
    data.email
  }.

`;
}

module.exports = generateMarkdown;
