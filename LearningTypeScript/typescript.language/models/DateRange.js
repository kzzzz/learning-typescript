var DateRange = (function () {
    function DateRange(start, end) {
        this.start = start;
        this.end = end;
    }
    Object.defineProperty(DateRange.prototype, "startDate", {
        get: function () {
            return this.start;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(DateRange.prototype, "endDate", {
        get: function () {
            return this.end;
        },
        enumerable: true,
        configurable: true
    });

    DateRange.prototype.contains = function (period) {
        return this.start < period.start && this.end >= period.end;
    };

    DateRange.prototype.in = function (period) {
        return period.contains(this);
    };
    return DateRange;
})();
//# sourceMappingURL=DateRange.js.map
