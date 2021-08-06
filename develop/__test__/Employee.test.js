const Employee = require("../lib/Employee");

describe("Employee", () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
        it("should create a new Employee object (card) with name, id and email address", () => {
            const employee = new Employee("Lucy", 10982, "lucy.conroy@gmail.com");

            expect(employee.name).toEqual("Lucy");
            expect(employee.id).toEqual(10982);
            expect(employee.email).toEqual("lucy.conroy@gmail.com");
            expect(employee.github).toEqual(undefined);
            expect(employee.office).toEqual(undefined);
            expect(employee.school).toEqual(undefined);
        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Employee();
            const err = new Error(
                "Expected parameter 'text' to be a non empty string"
            );

            // Verify that an error was thrown in the callback function
            expect(cb).toThrow(err);
        });
    });
});