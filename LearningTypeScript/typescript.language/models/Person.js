var Person = (function () {
    function Person(firstName, lastName) {
    }
    Person.prototype.setFirstName = function (value) {
        this.firstName = value;
    };

    Person.prototype.setLastName = function (value) {
        this.lastName = value;
    };

    Person.prototype.getFullName = function () {
        return this.firstName + ", " + this.lastName;
    };
    return Person;
})();
//# sourceMappingURL=Person.js.map
