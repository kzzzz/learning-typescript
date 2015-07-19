// Generic function
function getValue(value) {
    return value;
}

getValue("Hello world");
getValue(999);
getValue(document.createElement('H2'));


var List = (function () {
    function List() {
    }
    List.prototype.bar = function (data) {
    };

    List.prototype.baz = function () {
        return this.foo;
    };
    return List;
})();
//# sourceMappingURL=generics.js.map
