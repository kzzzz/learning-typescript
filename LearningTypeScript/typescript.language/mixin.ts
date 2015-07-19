class Walker {
    name: string;

    walk() {
        return this.name + " is walking.";
    }
}

class Speaker {
    name: string;

    talk() {
        return this.name + " is talking.";
    }
}

class Person implements Walker, Speaker {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    walk: () => string;
    talk: () => string;
}

function mix(derivedType: any, ...baseTypes: any[]) {
    baseTypes.forEach(baseType => {
        var properties = Object.getOwnPropertyNames(baseType.prototype);

        // take over the properties from base type to the derived type
        properties.forEach(prop => {
            derivedType.prototype[prop] = baseType.prototype[prop];
        });
    });
}

mix(Person, Walker, Speaker);

var jantje = new Person("Jantje");
jantje.walk();
jantje.talk();
