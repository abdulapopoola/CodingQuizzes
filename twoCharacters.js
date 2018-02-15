function validate(s, arrA, arrB){
    for(let val of arrA){
        for (let valB of arrB){
            if(isValid(s, val, valB)){
                return true;
            }
        }
    }
    return false;
}

function isValid(s, a, b){
    let stack = [];
    for (let i = 0, len = s.length; i < len; i++){
        let char = s[i];
        let stackTop = stack[0];
        if(char === a || char === b){
            if(stackTop === char){
                return false;
            } else {
                stack[0] = char;
            }
        }
    }
    return true;
}

function twoCharacters(s) {
    let map = {};
    for (let i = 0, len = s.length; i < len; i++){
        let char = s[i];
        map[char] = map[char] || 0;
        map[char]++;
    }
    
    let keys = Object.keys(map);
    let map2 = {};
    for(let key of keys){
        let value = map[key];
        map2[value] = map2[value] || [];
        map2[value].push(key);
    }
    let values = keys.map(key => map[key]);
    let sortedValues = values.sort((a,b) => b - a); 
    
    for(let i = 1, len = sortedValues.length; i < len; i++){
        let prior = sortedValues[i-1];
        let current = sortedValues[i];
        if(prior === current || 
           prior === current + 1){
            if(validate(s, map2[prior], map2[current])){
                return prior + current;
            }
        }
    }
    return 0;    
}
