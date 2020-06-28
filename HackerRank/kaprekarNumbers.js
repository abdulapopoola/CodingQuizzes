function isKaprekar(val){
    let square = Math.pow(val, 2).toString();
    let midpoint = ~~(square.length / 2);
    let leftHalf = +square.substr(0, midpoint);
    let rightHalf = +square.substr(midpoint);    
    return val === (leftHalf + rightHalf);
}

function kaprekarNumbers(p, q) {
    return Array
        .from(new Array(q - p + 1), (x,i) => i + p)
        .filter(isKaprekar);
}
