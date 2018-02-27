let isDigit = (v) => Number.isFinite(+v);

let isLowerCase = (c) => {
    let charCode = c.charCodeAt(0);
    return charCode >= 97 && charCode <= 122;
};

let isUpperCase = (c) => {
    let charCode = c.charCodeAt(0);
    return charCode >= 65 && charCode <= 90;
};

let isSpecial = (c) => '!@#$%^&*()-+'.includes(c);

function minimumNumber(n, password) {
    let conditions = new Array(4).fill(false);
    for(let i =0; i < n; i++){
        let c = password[i];
        if(isDigit(c)) {
            conditions[0] = true;
        } 
        if(isLowerCase(c)){
            conditions[1] = true;
        }
        if (isUpperCase(c)){
            conditions[2] = true;
        }
        if(isSpecial(c)) {
            conditions[3] = true;
        }
    }
    let left = conditions.filter(a => !a).length;
    return Math.max(6-n, left, 0);
}
