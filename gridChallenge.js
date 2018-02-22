function gridChallenge(grid) {
    let sorted = grid.map(row => row.split('').sort());
    for(let i = 0, len = sorted[0].length; i < len; i++){
        for(let j = 1, jLen = grid.length; j < jLen; j++){
            if(sorted[j][i] < sorted[j-1][i]){
                return 'NO';
            }
        }
    }
    return 'YES';
}
