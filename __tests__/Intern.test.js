const Intern = require("../lib/Intern");

describe("should create an Intern instance",()=>{
    it("should set school name via constructor",()=>{
        const testval = "Ku";
        const i = new Intern("Tim",3,"tim@test.com", testval);
        expect(i.school).toBe(testval);
    })
    it("should return Intern for getRole()",()=>{
        const testval = "Intern";
        const i = new Intern("Tim",3,"tim@test.com", "KU")
        expect(i.getRole()).toBe(testval)
    })

    it("should be able too return schoolName for getSchoolName()",()=>{
        const testval = "KU";
        const i = new Intern("Foo",5, "Foo@foo.com",testval)
        expect(i.getSchoolName()).toBe(testval)
    })

})