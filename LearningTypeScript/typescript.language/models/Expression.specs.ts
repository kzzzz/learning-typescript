/// <reference path="expression.ts" />
/// <reference path="../../scripts/typings/jasmine/jasmine.d.ts" />

describe("in meta query build", () => {

    it('and operators', () => {

        var query = Expression
            .startAdd("firstName", "John")
            .and("lastName", "Doe")
            .toString();

        expect(query).toBe("inmeta:firstName=John inmeta:lastName=Doe");
    });

    it('or operators', () => {

        var query = Expression
            .startAdd("firstName", "John")
            .or("lastName", "Doe")
            .toString();

        expect(query).toBe("inmeta:firstName=John+OR+inmeta:lastName=Doe");
    });


    it('and & or operators', () => {

        var query = Expression
            .startAdd("firstName", "John")
            .and("lastName", "Doe")
            .or("city", "Utrecht")
            .toString();

        expect(query).toBe("inmeta:firstName=John inmeta:lastName=Doe+OR+inmeta:city=Utrehct");
    });

    it('xxx', () => {

        var query = Expression
            .startAdd("key1", "value1")
            .and("key1", "value1")
            .andGroup(Expression
                .startAdd("key1", "value1")
                .or("key1", "value1"))
            .or("key1", "value1")
            .or("key1", "value1")
            .orGroup(Expression
                .startAdd("key1", "value1")
                .or("key1", "value1"))
            .toString();

        console.log(query);

        //expect(query).toBe("xxx");
    });
});