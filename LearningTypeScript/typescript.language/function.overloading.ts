/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
class Addition {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a, b): any {
        if (typeof a == 'string' && typeof b == 'string') {
            return a + " " + b;
        }
        return a + b;
    }
}

describe("Addition", () => {

    var adder;

    beforeEach(() => {
        adder = new Addition();
    });

    it('add numbers', () => {
        var result = adder.add(1, 2);
        expect(result).toBe(3);
    });

    it('add strings', () => {
        var result = adder.add("Jantje", "Jansen");

        expect(result).toBe("Jantje Jansen");
    });
});

// function overloading
//function add(a: number, b: number): number;
//function add(a: string, b: string): string;
//function add(a, b): any {

//    if (typeof a == 'string' && typeof b == 'string') {
//        return a + " " + b;
//    }
//    return a + b;
//}

//add(1, 2);
//add("Jantje", "Jansen");