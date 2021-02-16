const inquirer= require("inquirer");
const fs= require("fs");
const path = require("path");
const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const manager = require("./lib/Manager");
const intern = require('./lib/Intern');
const render = require("./lib/renderHtml");

const dist_dir = path.resolve(__dirname, "dist")
const distPath = path.join(dist_dir, "team.html")
const output=[];
const questions = [
  
{
    type: "input",
    name: "employeeName",
    message: "what is the Employee's name"
},
{
    type: "input",
    name : "id",
    message: "what is employee's id",

},
{
    type: "input",
    name: "email",
    message: "what is employee's email?"
}, 
{type: "list",
  name: "role",
  message: "what is the employee'role?",
  choices: ["manager", "engineer", "intern"]
},
{
    type: "input",
    name: "officeNo",
    message: "what is the employee's officeNo?",
    when: function(answers){
        return answers.role === "manager"
    },

},
{
    type: "input",
    name: "github",
    message: "what is your github username?",
    when: function(answers){
     return answers.role === "engineer"
    }
},
{
    type: "input",
    name: "school",
    message: "what is your school name?",
    when : function(answers){
 return answers.role === "intern"
    }
},
{
    type:"confirm",
    name: "addEmployee",
    message: "would you like to add another employee?"
},

]



function promptUser(){
    inquirer.prompt(questions).then((answers)=>{
        output.push(answers)
        if(answers.addEmployee){
            promptUser()
        } else{
            // console.log(render(output));
           const team = output.map(emp=>{
                switch(emp){
                 case "Manager":
                return new manager( emp.name, emp.id, emp.email, emp.officeNo)
                case "Engineer":
                return new engineer(emp.name, emp.id, emp.email, emp.github)
                case "Intern":
                return new intern(emp.name, emp.id, emp.email, emp.school)
                
                }
            });
            
          fs.writeFile(distPath, render(team), err=>{
              if(err)
              {throw err}else{
                  console.log("Success!")
              }
        
        })
            
        }
    }).catch(err => {if(err){console.log("Error: ", err)}})
   
}


promptUser()