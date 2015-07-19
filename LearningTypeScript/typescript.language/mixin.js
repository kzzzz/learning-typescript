var Walker = (function () {
    function Walker() {
    }
    Walker.prototype.walk = function () {
        return this.name + " is walking.";
    };
    return Walker;
})();

var Speaker = (function () {
    function Speaker() {
    }
    Speaker.prototype.talk = function () {
        return this.name + " is talking.";
    };
    return Speaker;
})();

var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
})();

function mix(derivedType) {
    var baseTypes = [];
    for (var _i = 0; _i < (arguments.length - 1); _i++) {
        baseTypes[_i] = arguments[_i + 1];
    }
    baseTypes.forEach(function (baseType) {
        var properties = Object.getOwnPropertyNames(baseType.prototype);

        // take over the properties from base type to the derived type
        properties.forEach(function (prop) {
            derivedType.prototype[prop] = baseType.prototype[prop];
        });
    });
}

mix(Person, Walker, Speaker);

var jantje = new Person("Jantje");
jantje.walk();
jantje.talk();
//# sourceMappingURL=mixin.js.map
