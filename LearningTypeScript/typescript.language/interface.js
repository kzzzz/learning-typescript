var point1 = {
    x: 1,
    y: 1
};

var point2 = {
    x: 2,
    y: 2
};

var threeDPoint = {
    x: 3,
    y: 3,
    z: 3
};

function addPoints(p1, p2) {
    return {
        x: p1.x + p2.x,
        y: p1.y + p2.y
    };
}

addPoints(point1, point2);
addPoints(point1, threeDPoint);
//# sourceMappingURL=interface.js.map
