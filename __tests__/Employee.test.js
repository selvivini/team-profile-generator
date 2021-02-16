const Employee = require("../lib/Employee")

describe("Should see if the object instance is created", ()=>{
 it("should check if instance is of object type", ()=>{
  const e = new Employee();
  expect(typeof(e)).toBe("object")
 })
 
 it("can set name through constructor", ()=>{
     const name = "Ashok";
     const e = new Employee(name);
     expect(e.name).toBe(name);
 })
it("should set id via constructor",()=>{
    const id =123;
    const e = new Employee("Foo", id);
    expect(e.id).toBe(id)
})


 it("should set email through constructor", ()=>{
     const email="v@ssn.com";
     const e = new Employee("Vivin",2,email);
     expect(e.email).toBe(email)
 })

 it("should get name via constructor",()=>{
    const testval = "Alan";
    const e = new Employee(testval);
    expect(e.getName()).toBe(testval)
 })
 it("should get id via constructor",()=>{
    const testval = 25;
    const e = new Employee("Foo",testval);
    expect(e.getId()).toBe(testval)
 })
 it("should get email via constructor",()=>{
    const testval = "Alan@email.com";
    const e = new Employee("Alan",12,testval);
    expect(e.getEmail()).toBe(testval)
 })
 it("should getRole() returns employee object", ()=>{
     const testval = "Employee";
     const e = new Employee("vinu",12, "vinu@email.com")
     expect(e.getRole()).toBe(testval)
 })
})

