const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("create an engineer object instace",()=>{
    it("can set github name via constructor",()=>{
        const testval = "selvivini";
        const e = new Engineer("Selvi",1, "selvi@email.com",testval);
        expect(e.github).toBe(testval)
    })

    it("should return Engineer object for getRole()",()=>{
        const testval = "Engineer";
        const e = new Engineer("Foo",2, "test@test.com","testGithub")
        expect(e.getRole()).toBe(testval)
    })

    it("should getGithub name via constructor",()=>{
        const testval = "testGithub";
        const e= new Engineer("foo",2, 'foo@foo.com',testval)
        expect(e.getGitHub()).toBe(testval)
    })
})