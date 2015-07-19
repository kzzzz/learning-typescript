// you can merge:
// module
// interface
// class
// function

interface IBox {
    height: number;
    width: number;
}

interface IBox {
    depth: number;
}

var box: IBox = {
    height: 1,
    width: 2,
    depth: 3
};