const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
  describe("Initilization", () => {
    it('Should return an object containing a id property when a new instance is created', () => {
      const obj = new Engineer();

      expect("id" in obj).toEqual(true);
    });

    it("Should set 'name' when created", () => {
      const name = "Test Name";

      const obj = new Engineer(name);

      expect(obj.name).toBe("Test Name");
    });

    it("Should set 'email' when created", () => {
      const email = "testname@company.com";

      const obj = new Engineer("", "", email);

      expect(obj.email).toBe("testname@company.com");
    });
  });
  describe("Methods", () => {
    const name = "Test Name";
    const id = "1";
    const email = "testname@company.com";
    const github = "testname";
    const obj = new Engineer(name, id, email, github);

    it("Should return the engineer's name when getName() method is called", () => {

      expect(obj.getName()).toBe("Test Name");
    })
    it("Should return the engineer's Id when getId() method is called", () => {

      expect(obj.getId()).toBe("1");
    })
    it("Should return the engineer's email when getEmail() method is called", () => {

      expect(obj.getEmail()).toBe("testname@company.com");
    })
    it("Should return the engineer's github username when getGtihub() method is called", () => {

      expect(obj.getGithub()).toBe("testname");
    })
  })
})