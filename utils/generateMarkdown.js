// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case (license = 'Apache License 2.0'):
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      case (license = 'MIT License'):
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      case (license = 'Mozilla Public License 2.0'):
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    };
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    switch (license) {
      case (license = 'Apache License 2.0'):
        return `[Apache License 2.0](http://choosealicense.com/licenses/apache-2.0/)`;
      case (license = 'MIT License'):
        return `[MIT License](http://choosealicense.com/licenses/mit/)`;
      case (license = 'Mozilla Public License 2.0'):
        return `[Mozilla Public License 2.0](http://choosealicense.com/licenses/mpl-2.0/)`;
    };
  } else {
    return '';
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseLink(lisence)}`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.installation}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.test}

  ## Questions
  Feel free to reach out via email or github.
  * E-mail: [${data.email}](mailto:${data.email})
  * Github: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
