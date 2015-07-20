
//Q** - is triplet of points at the (x,y, result)
export default function bilint(x,y, Q11, Q12, Q21, Q22){
    if(Q11.length != 3 || Q12.length != 3 || Q21.length != 3 || Q22.length != 3){
        console.error("Parameters Q11,  Q12, Q21 and Q22, must contain array of 3 items");
        return 0;
    }

    let x1 = Q11[0];
    let y1 = Q11[1];
    let result1 = Q11[2];

    let y2 = Q12[1];
    let result2 = Q12[2];

    let x2 = Q21[0];
    let result3 = Q21[2];

    let result4 = Q22[2];

    if(x1 != Q12[0] || y1 != Q21[1] || y2 != Q22[1] || Q21[0] != Q22[0]){
        console.error("At least one point is contain error");
        return 0;
    }

    return (result1 * (x2 - x)* (y2 - y) + result2 * (x - x1) * (y2 - y) + result3 * (x2 - x) * (y - y1) + 
    result4 * (x - x1) * (y - y1)) * (1/((x2 - x1) * (y2 - y1)));
}
