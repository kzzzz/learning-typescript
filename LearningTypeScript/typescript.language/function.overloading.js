/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
var Addition = (function () {
    function Addition() {
    }
    Addition.prototype.add = function (a, b) {
        if (typeof a == 'string' && typeof b == 'string') {
            return a + " " + b;
        }
        return a + b;
    };
    return Addition;
})();

describe("Addition", function () {
    var adder;

    beforeEach(function () {
        adder = new Addition();
    });

    it('add numbers', function () {
        var result = adder.add(1, 2);
        expect(result).toBe(3);
    });

    it('add strings', function () {
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
//# sourceMappingURL=function.overloading.js.map
