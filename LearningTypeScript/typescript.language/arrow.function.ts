/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
var add = (x: number, y: number) => {
    return x + y;
}

describe('math', () => {
    it('shoud add correctly', () => {
        var result = add(1, 2);

        expect(result).toBe(3);
    });
})