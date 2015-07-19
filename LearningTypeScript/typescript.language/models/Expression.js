var Expression = (function () {
    function Expression() {
        this.ands = [];
        this.ors = [];
        this.andGroups = [];
        this.orGroups = [];
    }
    Expression.startAdd = function () {
        return new Expression();
    };

    Expression.prototype.and = function (key, value) {
        this.ands.push({ key: key, value: value });
        return this;
    };

    Expression.prototype.or = function (key, value) {
        this.ors.push({ key: key, value: value });
        return this;
    };

    Expression.prototype.andGroup = function (expression) {
        this.andGroups.push(expression);
        return this;
    };

    Expression.prototype.orGroup = function (expression) {
        this.orGroups.push(expression);
        return this;
    };

    Expression.createInMetaQuery = function (key, value) {
        return "inmeta:" + key + "=" + value;
    };

    Expression.createQuery = function (ands, separator) {
        var query = "";
        ands.forEach(function (and) {
            var q = Expression.createInMetaQuery(and.key, and.value);
            query += separator + q;
        });

        return query;
    };

    Expression.prototype.toString = function () {
        // TODO:
        var andString = Expression.createQuery(this.ands, " ");
        var orString = Expression.createQuery(this.ors, "+OR+");
        return andString + ' ' + orString;
    };
    return Expression;
})();
//# sourceMappingURL=Expression.js.map
