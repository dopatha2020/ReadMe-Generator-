function generateMarkdown(data) {
  return `
# ${data.title}
![GitHub License](https://img.shields.io/badge/license-${data.license}-red)

## Description  

${data.description}  

## Table of Contents
- Installation 
- Usage
- License
- Contributing
- Tests
- Questions  

## Installation  

To install necessary dependencies, run the following command:
>${data.install}  

## Usage  

This is what the user needs to know about using the repo:
${data.repo}  

## License  

The license for this project:
${data.license}  

## Contributing  

This is how the user can contribute to the project:
${data.contribute}  

## Tests  

This is the command to initiate testing:
>${data.test}  

## Questions  

If you have questions about the repo, contact ${data.name} directly, at ${data.email}.
`;
}

module.exports = generateMarkdown;

