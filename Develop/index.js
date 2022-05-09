//  Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the project title?",
  },
  //description, installation instructions, usage information, contribution guidelines, and test instructions
  {
    type: "input",
    name: "description",
    message: "Enter a Description of the Project.",
  },
  {
    type: "input",
    name: "Installation",
    message: "How is this application installed?",
  },
  {
    type: "input",
    name: "Usage",
    message: "How is this application used?",
  },
  {
    type: "input",
    name: "ContributionGuidelines",
    message: "Enter your Contribution Guidelines.",
  },
  {
    type: "input",
    name: "TestInstructions",
    message: "Enter Test Instructions.",
  },
  //license for my application from a list of options
  {
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project: ",
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ]
  },
  //GitHub username
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
  },
  //email address
  {
    type: "input",  
    name: "email",
    message: "Please enter your email: "
  }
];

// TODO: Create a function to write README file
function writeToFile(filelocation, data) {
  fs.writeFileSync(filelocation,
    generateMarkdown(data)
    )
}

// TODO: Create a function to initialize app
async function init() {
  try {
  //ask questions
  const answers =  await inquirer.prompt(questions);
  //write readme
  let filelocation = '../Develop/dist/README.md';
  await writeToFile(filelocation,answers);
  console.log('✔️  Successfully wrote to README.md');
}   catch(err) {
  console.log(err);
}
};

// Function call to initialize app
init();



