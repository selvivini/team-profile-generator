// const inquirer= require("inquirer");
// const fs= require("fs");
// const path = require("path");
// const Employee = require("./lib/Employee");
// const Engineer = require("./lib/Engineer");
// const Manager = require("./lib/Manager");
// const Intern = require('./lib/Intern');
// const render = require("./lib/renderHtml");

// const dist_dir = path.resolve(__dirname, "dist")
// const distPath = path.join(dist_dir, "team.html")
// // const output=[];
// const questions = [
  
// {
//     type: "input",
//     name: "employeeName",
//     message: "what is the Employee's name"
// },
// {
//     type: "input",
//     name : "id",
//     message: "what is employee's id",

// },
// {
//     type: "input",
//     name: "email",
//     message: "what is employee's email?"
// }, 
// {type: "list",
//   name: "role",
//   message: "what is the employee'role?",
//   choices: ["Manager", "Engineer", "Intern"]
// },
// {
//     type: "input",
//     name: "officeNo",
//     message: "what is the employee's officeNo?",
//     when: function(answers){
//         return answers.role === "Manager"
//     },

// },
// {
//     type: "input",
//     name: "github",
//     message: "what is your github username?",
//     when: function(answers){
//      return answers.role === "Engineer"
//     }
// },
// {
//     type: "input",
//     name: "school",
//     message: "what is your school name?",
//     when : function(answers){
//  return answers.role === "Intern"
//     }
// },
// {
//     type:"confirm",
//     name: "addEmployee",
//     message: "would you like to add another employee?"
// },

// ]



// function promptUser(){
//     inquirer.prompt(questions).then((answers)=>{
        
//         if(answers.addEmployee){
//             promptUser()
//         } else{
//             // console.log(render(output));
//             console.log(answers.role)
//            let employees = [];
//             switch(answers.role){
//                 case "Manager":
//                employees.push(new Manager(answers.name, answers.id, answers.email,answers.officeNo))  
//                 case "Engineer":
//                 employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github)) 
//                 case "Intern":
//                employees.push(new Intern(answers.name, answers.id, answers.email, answers.school)) 
                
//                 }
//         ;

//             console.log(employees)
            
//           fs.writeFile(distPath, render(employees), err=>{
//               if(err)
//               {throw err}else{
//                   console.log("Success!")
//               }
        
//         })
            
//         }
//     }).catch(err => {if(err){console.log("Error: ", err)}})
   
// }


// promptUser()