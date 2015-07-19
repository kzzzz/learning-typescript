/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="mixin.ts" />

describe("Mixin", () => {

    it("walk", () => {
        var jantje = new Person("Jantje");

        expect(jantje.walk()).toBe("Jantje is walking.");
    });

    it("talk", () => {
        var jantje = new Person("Jantje");

        expect(jantje.talk()).toBe("Jantje is talking.");
    });
})