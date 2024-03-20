// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (!license || license === 'None') return '';
    return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
  }
  
  // Function to return the license link
  function renderLicenseLink(license) {
    if (!license || license === 'None') return '';
    return `https://opensource.org/licenses/${license}`;
  }
  
  // Function to return the license section of README
  function renderLicenseSection(license) {
    if (!license || license === 'None') return '';
    return `## License\nThis project is licensed under the ${license} license. For more information, please visit the [license page](${renderLicenseLink(license)}).`;
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
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
  
  For any questions, please contact me at [${data.email}](mailto:${data.email}).
  
  GitHub: [${data.github}](https://github.com/${data.github})
  
  `;
  }
  
  module.exports = generateMarkdown;
  