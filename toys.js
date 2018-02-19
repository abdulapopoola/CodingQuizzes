function toys(w) {
    let sorted = w.sort((a,b) => a - b);
    let count = 1;
    let tally = sorted[0] + 4;
    for(let i = 1, len = w.length; i < len; i++){
        let value = sorted[i];
        if(value > tally){
            tally = value + 4;
            count++;
        }
    }
    return count;
}
