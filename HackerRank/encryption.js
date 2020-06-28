let createNbyMArray = (n, m) => [...Array(n).keys()].map(i => new Array(m));

function encryption(s) {
    let split = s.split('');
    let nonSpaceLen = split.reduce((acc, curr) => {
        return curr === ' ' ? ++acc : acc;
    }, 0);
    let compressed = s.length - nonSpaceLen;
    let rows = Math.floor(Math.sqrt(compressed));
    let columns = Math.ceil(Math.sqrt(compressed));
    let value = rows * columns;
    if(value < compressed){
        // rows is smaller since Math.floor was done on it
        rows++;
    }
    
    let arr = createNbyMArray(rows, columns);
    for(let i = 0; i < compressed; i++) {
        let char = s[i];
        if (char === ' ') {
            continue;
        }
        let xIndex = i % columns;
        let yIndex = ~~(i / columns);
        arr[yIndex][xIndex] = char;
    }
    
    let encrypted = [];
    for(let i = 0; i < columns; i++){
        let s = '';
        for(let j = 0; j < rows; j++){
            let val= arr[j][i];
            if(val){
                s+=val;
            }
        }
        encrypted.push(s);
    }
    return encrypted.join(' ');
}
