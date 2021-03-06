const Employee = require('../lib/Employee');

describe('Employee class', () => {
  describe("Initilization", () => {
    it('Should return an object containing a id property when a new instance is created', () => {
      const obj = new Employee();

      expect("id" in obj).toEqual(true);
    });

    it("Should set 'name' when created", () => {
      const name = "Test Name";

      const obj = new Employee(name);

      expect(obj.name).toBe("Test Name");
    });

    it("Should set 'email' when created", () => {
      const email = "testname@company.com";

      const obj = new Employee("", "", email);

      expect(obj.email).toBe("testname@company.com");
    });
  });
  describe("Methods", () => {
    const name = "Test Name";
    const id = "1";
    const email = "testname@company.com";
    const obj = new Employee(name, id, email);

    it("Should return the employee's name when getName() method is called", () => {

      expect(obj.getName()).toBe("Test Name");
    })
    it("Should return the employee's Id when getId() method is called", () => {

      expect(obj.getId()).toBe("1");
    })
    it("Should return the employee's email when getEmail() method is called", () => {

      expect(obj.getEmail()).toBe("testname@company.com");
    })
  })
})