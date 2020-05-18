const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown= require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your prefered e-mail?"
      },
      {
        type: "input",
        name: "title",
        message: "What is your project title?"
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description about your project?"
      },
      {
        type: "list",
        name: "license",
        message: "What type license should your project have?",
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "NONE"]
        
      },
      {
        type: "input",
        name: "install",
        message: "What command should be used to install dependencies?"
      },
      {
        type: "input",
        name: "test",
        message: "What command should be entered to run test?",
        default: "NPM Test"
      },
      {
        type: "input",
        name: "repo",
        message: "What does the user need to know about using the REPO?"
      },
      {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to the REPO?"
      }
    ]);
  }

async function init() {
    try{
        const answers= await promptUser(); 
        const readme= generateMarkdown(answers);
        await writeFileAsync("readme.md", readme);
        console.log("Successfully wrote to readme.md");
    }
    catch (err) {
        console.log(err);
    }
}
init();

