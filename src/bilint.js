
//Q** - is triplet of points at the (x,y, result)
export default function bilint(x,y, Q11, Q12, Q21, Q22){
    let x1 = Q11[0];
    let y1 = Q11[1];
    let result1 = Q11[2];

    let x2 = Q12[0];
    let y2 = Q12[1];
    let result2 = Q12[2];

    let x3 = Q21[0];
    let y3 = Q21[1];
    let result3 = Q21[2];

    let x4 = Q22[0];
    let y4 = Q22[1];
    let result4 = Q22[2];

    return result1 * (x2 - x)* (y2 - y) + result2 * (x - x1) * (y2 - y) + result3 * (x2 - x) * (y - y1) + 
    result4 * (x - x1) * (y - y1) * (1/((x2 - x1) * (y2 - y1)));
}
