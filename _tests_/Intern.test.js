const Intern = require('../lib/Intern');

describe('Intern class', () => {
  describe("Initilization", () => {
    it('Should return an object containing a id property when a new instance is created', () => {
      const obj = new Intern();

      expect("id" in obj).toEqual(true);
    });

    it("Should set 'name' when created", () => {
      const name = "Test Name";

      const obj = new Intern(name);

      expect(obj.name).toBe("Test Name");
    });

    it("Should set 'email' when created", () => {
      const email = "testname@company.com";

      const obj = new Intern("", "", email);

      expect(obj.email).toBe("testname@company.com");
    });
  });
  describe("Methods", () => {
    const name = "Test Name";
    const id = "1";
    const email = "testname@company.com";
    const school = "University of NSW";
    const obj = new Intern(name, id, email, school);

    it("Should return the intern's name when getName() method is called", () => {

      expect(obj.getName()).toBe("Test Name");
    })
    it("Should return the intern's Id when getId() method is called", () => {

      expect(obj.getId()).toBe("1");
    })
    it("Should return the intern's email when getEmail() method is called", () => {

      expect(obj.getEmail()).toBe("testname@company.com");
    })
    it("Should return the intern's school when getSchool() method is called", () => {

      expect(obj.getSchool()).toBe("University of NSW");
    })
  })
})