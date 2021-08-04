const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe(" Engineer", () => {
    // Test for all use cases when initializing a new Engineer object
    describe("Initialization", () => {
        it("should create a new Engineer object (card) with name, id, email address and GitHub user name", () => {
            const engineer = new Engineer("Rachel", 12345, "rachel.brain@gmail.com", "rachel-brain");

            expect(engineer.name).toEqual("Rachel");
            expect(engineer.id).toEqual(12345);
            expect(engineer.email).toEqual("rachel.brain@gmail.com");
            expect(engineer.github).toEqual("rachel-brain");
            expect(engineer.office).toEqual(undefined);
            expect(engineer.school).toEqual(undefined);
        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Engineer();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
        });
    });
});