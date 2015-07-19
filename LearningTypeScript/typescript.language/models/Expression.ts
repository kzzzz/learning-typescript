class Expression {

    private ands;
    private ors;
    private andGroups;
    private orGroups;

    constructor() {
        this.ands = [];
        this.ors = [];
        this.andGroups = [];
        this.orGroups = [];
    }

    static startAdd() {
        return new Expression();
    }

    and(key: string, value: string) {
        this.ands.push({ key: key, value: value });
        return this;
    }

    or(key: string, value: string) {
        this.ors.push({ key: key, value: value });
        return this;
    }

    andGroup(expression: Expression) {
        this.andGroups.push(expression);
        return this;
    }

    orGroup(expression: Expression) {
        this.orGroups.push(expression);
        return this;
    }

    private static createInMetaQuery(key: string, value: string) {
        return "inmeta:" + key + "=" + value;
    }

    private static createQuery(ands, separator:string) {
        var query = "";
        ands.forEach((and:any) => {
            var q = Expression.createInMetaQuery(and.key, and.value);
            query += separator + q;
        });

        return query;
    }

    toString() {
        // TODO:
        var andString = Expression.createQuery(this.ands, " ");
        var orString = Expression.createQuery(this.ors, "+OR+");
        return andString + ' ' + orString;
    }
}

