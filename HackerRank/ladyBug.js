function isAlreadyHappy(input) {
    for(let i = 0, len = input.length; i < len; i++){
        if(i == 0 && input[i] !== input[i+1]){
            return false;
        }
        else if (input[i] != input[i+1] && input[i] != input[i-1]) {
            return false;
        }
    }
    return true;
}

function hasUniqueChar(input) {
    let map = {};
    let chars = new Array(26).fill(0);
    let stripped = input.replace(/_/g, '').split('');   
    stripped.forEach(val => {
       let charCode = val.charCodeAt(0) - 'A'.charCodeAt(0);
       chars[charCode]++;
    });
    return !!(chars.filter(a => a === 1).length);     
}

let hasSpace = (input) => input.includes('_');

function isHappy(input) {
    if(hasUniqueChar(input)){
        return false;
    }
    
    if(isAlreadyHappy(input)){
        return true;
    }
    
    if(hasSpace(input)){
        return true;
    }
    
    return false;
}

let ladyBug = (input) => isHappy(input) ? 'YES' : 'NO';
