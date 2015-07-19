
interface IPoint {
    x: number;
    y: number;
}

var point1 = {
    x: 1,
    y: 1,
};

var point2 = {
    x: 2,
    y: 2
};

interface IThreeDPoint extends IPoint {
    z: number
}

var threeDPoint = {
    x: 3,
    y: 3,
    z: 3
};

function addPoints(p1: IPoint, p2: IPoint) {
    return {
        x: p1.x + p2.x,
        y: p1.y + p2.y
    };
}

addPoints(point1, point2);
addPoints(point1, threeDPoint);

 