// Generic function
function getValue<T>(value: T) {
    return value;
}

getValue<string>("Hello world");
getValue<number>(999);
getValue<HTMLElement>(document.createElement('H2'));

// Generic interface
interface IEnumerable<T> {

}

// Generic class
// Constraints
interface IComparable { }
class List<T extends IComparable> implements IEnumerable<T>{
    foo: T;

    bar(data: T) {

    }

    baz(): T {
        return this.foo;
    }
} 