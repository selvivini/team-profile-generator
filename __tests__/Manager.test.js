const Manager = require("../lib/Manager")

describe("Should create a manager object",()=>{
it("should be able to set officeNo via constructor",()=>{
    const testval = 215698125;
    const m = new Manager("ram",2,"ram@email.com",testval)
    expect(m.officeNo).toBe(testval)
})

it("should be able to return manager object for getRole()",()=>{
 const testval = "Manager";
 const m = new Manager("ram",2,"test@test.com",2154634152)
 expect(m.getRole()).toBe(testval)
})

it("should be able to get officenumber via constructor",()=>{
    const testval = 4152963451;
    const m = new Manager("foo",2, "foo2foo.com",testval)
    expect(m.getOfficeNumber()).toBe(testval)
})
})