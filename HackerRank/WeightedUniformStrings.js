function calculate(s) {
    let map = {};
    let baseCharCode = 'a'.charCodeAt(0);
    let lastSeen;
    let chainLength = 1;
    for(let i = 0, len = s.length; i < len; i++){
        let char = s[i];
        let offset = char.charCodeAt(0) - baseCharCode + 1;
        map[offset] = true;
        if(lastSeen === char){
            chainLength++;
            let newOffset = offset * chainLength;
            map[newOffset] = true;
        } else {
            lastSeen = char;
            chainLength = 1;
        }
    }
    
    return map;
}
