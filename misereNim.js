function misereNim(s) {    
    let r = s.reduce((curr, acc) => curr ^ acc, 0);
    let sum = s.reduce((curr, acc) => curr + acc, 0);
    if (sum === s.length) {
        return sum % 2 === 0 ? 'First' : 'Second';
    }
    
    return r > 0 ? 'First' : 'Second';
}
