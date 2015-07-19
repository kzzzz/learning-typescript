// Optional parameter [?]
// Optional parameter should be last of the parameters. It can not be before the required parameters
var sayHello = function (firstName, lastName) {
    var greetings = "Hello " + firstName;

    if (lastName) {
        greetings += " " + lastName;
    }

    return greetings;
};

sayHello("Jantje");
sayHello("Pietje", "Pietersma");

// rest operator [...]
// variable params of same type (= params keyword in C#)
function addNumbers(x, y) {
    var z = [];
    for (var _i = 0; _i < (arguments.length - 2); _i++) {
        z[_i] = arguments[_i + 2];
    }
    var total = x + y;
    z.forEach(function (n) {
        return total += n;
    });

    return total;
}

addNumbers(1, 2);
addNumbers(1, 2, 3, 4, 5);
//# sourceMappingURL=parameters.js.map
