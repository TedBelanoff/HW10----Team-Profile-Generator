//Requirements
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const render = require("./lib/htmlRenderer");

//Team array to be appended to. Unique ID to be triggered each addition run
var Team = [];
var EmployeeID = 0
//Initial Question
const question1 = [
    {type: "list",
    name: "EmployeeType",
    message: "What Type of Employee Would You Like to Add?",
    choices:["Manager",
    "Engineer",
    "Intern",
    "I am done with adding employees"]}
];

//Manager Questions
const ManagerQs =
    [{type: "input",
    name: "ManagerName",
    message: "What is this manager's name?"},

    {type: "input",
    name: "ManagerAddress",
    message: "What is this manager's email address?"},

    {type: "input",
    name: "ManagerNumber",
    message: "What is this manager's office number?"}]

//Engineer Questions
const EngineerQs =
    [{type: "input",
    name: "EngineerName",
    message: "What is this engineer's name?"},

    {type: "input",
    name: "EngineerAddress",
    message: "What is this engineer's email address?"},

    {type: "input",
    name: "EngineerUsername",
    message: "What is this engineer's GitHub username?"}]

//Intern Questions
const InternQs =
    [{type: "input",
    name: "InternName",
    message: "What is this intern's name?"},

    {type: "input",
    name: "InternAddress",
    message: "What is this intern's email address?"},

    {type: "input",
    name: "InternSchool",
    message: "What school does this intern attend?"}]

//Initial Option Choice
function init() {
    EmployeeID = EmployeeID + 1
    inquirer.prompt(question1).then((QuestionData) => {
        switch(QuestionData.EmployeeType) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "I am done with adding employees":
                FileExport(Team)
                break;
            }        
        }
    )
};

//Add and Append Team Members
function addManager (){
    inquirer.prompt(ManagerQs)
        .then((QuestionData) => {
            const manager = new Manager(QuestionData.ManagerName, EmployeeID, QuestionData.ManagerAddress, QuestionData.ManagerNumber)     
            Team.push(manager);
        init()
    })};

function addEngineer () {
    inquirer.prompt(EngineerQs)
        .then((QuestionData) => {
            const engineer = new Engineer(QuestionData.EngineerName, EmployeeID, QuestionData.EngineerAddress, QuestionData.EngineerUsername)
            Team.push(engineer);
        init();
    })};

function addIntern () {
    inquirer.prompt(InternQs)
        .then((QuestionData) => {
            const intern = new Intern(QuestionData.InternName, EmployeeID, QuestionData.InternAddress, QuestionData.InternSchool)
            Team.push(intern);
        init()
    })};

//Export and Merge Files
function FileExport(Team) {
    return fs.writeFileSync(path.join(process.cwd(),"index.html"), render(Team));
};

init();