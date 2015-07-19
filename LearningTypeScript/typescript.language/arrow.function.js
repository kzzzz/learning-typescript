/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
var add = function (x, y) {
    return x + y;
};

describe('math', function () {
    it('shoud add correctly', function () {
        var result = add(1, 2);

        expect(result).toBe(3);
    });
});
//# sourceMappingURL=arrow.function.js.map
