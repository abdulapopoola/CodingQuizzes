let isOdd = (i) => !!(i & 1);
function nimbleGame(s) {
    let reduced = 0;
    for(let i = 0, len = s.length; i < len; i++){
        if(isOdd(s[i])){
            reduced ^= i;
        }
    }
    return reduced === 0 ? 'Second' : 'First';
}
