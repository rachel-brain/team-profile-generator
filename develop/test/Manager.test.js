const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Manager = require("../lib/Manager");

describe(" Manager", () => {
    // Test for all use cases when initializing a new Manager object
    describe("Initialization", () => {
        it("should create a new Manager object (card) with name, id, email address and office number", () => {
            const manager = new Manager("Irene", 11025, "irene-adam@gmail.com", "B23");

            expect(manager.name).toEqual("Irene");
            expect(manager.id).toEqual(11025);
            expect(manager.email).toEqual("irene-adam@gmail.com");
            expect(manager.office).toEqual("B23");
            expect(manager.school).toEqual(undefined);
            expect(manager.github).toEqual(undefined);
        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Manager();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
        });
    });
});