// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellowgreen.svg)`;
  }
  //   return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  // }
  // else if (license === `Apache 2.0`) {
  //   return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  // }
  // else if (license === `GPL 3.0`) {
  //   return `![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  // }
  // else if (license === `MPL 2.0`) {
  //   return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  // }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {

    return `![MIT](https://opensource.org/licenses/MIT)`;
  }
  else if (license === "APACHE2.0") {
    return `![Apache](https://opensource.org/license/apache-2-0)`;
  }
  else if (license === "GPL3.0") {
    return `![GPL](https://opensource.org/license/gpl-3-0)`;
  }
  else if (license === "MPL2.0") {
    return `![MPL](https://opensource.org/license/mpl-2-0)`;
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    This project is licensed under the ${license}.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}  
${renderLicenseBadge(data.license)} 

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contact Information](#contactinformation)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)

${renderLicenseLink(data.license)}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Test
${data.test}
${renderLicenseSection(data.license)}

## Contact Information
For questions or feedback, please contact me at:
\`\`\` 
* Name - ${data.name}
* Email - ${data.email}
* GitHub - [${data.github}](https://github.com/${data.github})
\`\`\`
`;
}

export default generateMarkdown;
