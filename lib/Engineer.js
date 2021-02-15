const Employee = require("./Employee")

class Engineer extends Employee{
constructor(name, email,id, github){
 super(name,id,email)
 this.github = github
}

getRole(){
    return "Engineer"
}
getGitHub(){
    return this.github
}

}

module.exports = Engineer