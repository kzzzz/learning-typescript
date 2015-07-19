/// <reference path="../../scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="daterange.ts" />
describe("Date range", function () {
    it("contains", function () {
        var period1 = new DateRange(new Date(2015, 1, 1), new Date(2015, 12, 31));
        var period2 = new DateRange(new Date(2015, 3, 4), new Date(2015, 12, 31));

        var expected = period1.contains(period2);

        expect(expected).toBe(true);
    });
});
//# sourceMappingURL=DateRange.specs.js.map
