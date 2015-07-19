class Expression {
    private start;
    private ands;
    private ors;
    private andGroups;
    private orGroups;

    constructor(key: string, value: string) {
        this.start = { key: key, value: value }
        this.ands = [];
        this.ors = [];
        this.andGroups = [];
        this.orGroups = [];
    }

    static startAdd(key: string, value: string) {
        var expression = new Expression(key, value);
        return expression;
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

    private static createQuery(kevValues, separator: string): string {
        var result = "";

        kevValues.forEach((kvp: any) => {
            var q = Expression.createInMetaQuery(kvp.key, kvp.value);
            if (q) {
                result += separator + q;
            }
        });

        return result;
    }

    private static concat(...strings: string[]): string {
        var result = "";

        strings.forEach((s) => {
            if (s) {
                result += s;
            }
        });

        return result;
    }

    toString(): string {

        var startstring = Expression.createInMetaQuery(this.start.key, this.start.value);
        var andString = Expression.createQuery(this.ands, " ");
        var orString = Expression.createQuery(this.ors, "+OR+");
        // TODO:
        var andGroupsString = "";
        var orGroupsString = "";

        var result = Expression.concat(startstring, andString, orString, andGroupsString, orGroupsString);

        return result;
    }
}