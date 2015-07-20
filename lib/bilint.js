
//Q** - is triplet of points at the (x,y, result)
"use strict";

module.exports = bilint;

function bilint(x, y, Q11, Q12, Q21, Q22) {
    var x1 = Q11[0];
    var y1 = Q11[1];
    var result1 = Q11[2];

    //let x2 = Q12[0];
    var y2 = Q12[1];
    var result2 = Q12[2];

    var x2 = Q21[0];
    //let y3 = Q21[1];
    var result3 = Q21[2];

    //let x4 = Q22[0];
    //let y4 = Q22[1];
    var result4 = Q22[2];

    return 0 + (result1 * (x2 - x) * (y2 - y) + result2 * (x - x1) * (y2 - y) + result3 * (x2 - x) * (y - y1) + result4 * (x - x1) * (y - y1)) * (1 / ((x2 - x1) * (y2 - y1)));
}