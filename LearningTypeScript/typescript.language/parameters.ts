// Optional parameter [?]
// Optional parameter should be last of the parameters. It can not be before the required parameters

var sayHello = (firstName: string, lastName?: string) => {
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
function addNumbers(x: number, y: number, ...z: number[]) {
    var total = x + y;
    z.forEach(n => total += n);

    return total;
}

addNumbers(1, 2);
addNumbers(1, 2, 3, 4, 5);