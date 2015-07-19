/// <reference path="expression.ts" />
/// <reference path="../../scripts/typings/jasmine/jasmine.d.ts" />

describe("in meta query build", () => {
    it('xxx', () => {

        var query = Expression.startAdd()
            .and("key1", "value1")
            .and("key1", "value1")
            .andGroup(Expression.startAdd()
                .or("key1", "value1")
                .or("key1", "value1"))
            .or("key1", "value1")
            .or("key1", "value1")
            .orGroup(Expression.startAdd()
                .or("key1", "value1")
                .or("key1", "value1"))
            .toString();

        console.log(query);

        //expect(query).toBe("xxx");
    });
});


