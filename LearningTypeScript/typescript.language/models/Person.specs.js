/// <reference path="../../scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="person.ts" />
describe("Person FullName", function () {
    var person;

    beforeEach(function () {
        person = new Person("Joe", "Smith");
    });

    it("should concatenate first and last names", function () {
        expect(person.getFullName()).toBe("Joe, Smith");
    });
});
//# sourceMappingURL=Person.specs.js.map
