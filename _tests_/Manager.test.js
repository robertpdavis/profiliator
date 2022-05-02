const Manager = require('../lib/Manager');

describe('Manager class', () => {
  describe("Initilization", () => {
    it('Should return an object containing a id property when a new instance is created', () => {
      const obj = new Manager();

      expect("id" in obj).toEqual(true);
    });

    it("Should set 'name' when created", () => {
      const name = "Test Name";

      const obj = new Manager(name);

      expect(obj.name).toBe("Test Name");
    });

    it("Should set 'email' when created", () => {
      const email = "testname@company.com";

      const obj = new Manager("", "", email);

      expect(obj.email).toBe("testname@company.com");
    });
  });
  describe("Methods", () => {
    const name = "Test Name";
    const id = "1";
    const email = "testname@company.com";
    const officeNum = "07 1234 5678";
    const obj = new Manager(name, id, email, officeNum);

    it("Should return the manager's name when getName() method is called", () => {

      expect(obj.getName()).toBe("Test Name");
    })
    it("Should return the manager's Id when getId() method is called", () => {

      expect(obj.getId()).toBe("1");
    })
    it("Should return the manager's email when getEmail() method is called", () => {

      expect(obj.getEmail()).toBe("testname@company.com");
    })
    it("Should return the manager's office number when getOfficeNum() method is called", () => {

      expect(obj.getOfficeNum()).toBe("07 1234 5678");
    })
  })
})