const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe(" Intern", () => {
    // Test for all use cases when initializing a new Intern object
    describe("Initialization", () => {
        it("should create a new Intern object (card) with name, id, email address and school attending", () => {
            const intern = new Intern("Matt", 12899, "matt.obrien@gmail.com", "Monash University");

            expect(intern.name).toEqual("Matt");
            expect(intern.id).toEqual(12899);
            expect(intern.email).toEqual("matt.obrien@gmail.com");
            expect(intern.school).toEqual("Monash University");
            expect(intern.office).toEqual(undefined);
            expect(intern.github).toEqual(undefined);
        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Intern();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
        });
    });
});