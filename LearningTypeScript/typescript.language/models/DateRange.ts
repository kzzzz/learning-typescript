class DateRange {
    start: Date;
    end: Date;

    constructor(start: Date, end: Date) {
        this.start = start;
        this.end = end;
    }

    get startDate() {
        return this.start;
    }

    get endDate() {
        return this.end;
    }

    contains(period: DateRange) {
        return this.start < period.start && this.end >= period.end;
    }
    
    in(period: DateRange) {
        return period.contains(this);
    }
}