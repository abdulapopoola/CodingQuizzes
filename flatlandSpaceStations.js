function flatlandSpaceStations(n, c) {
    if(n === c.length) {
        return 0;
    }
    let sorted = c.sort((a, b) => a - b);
    let maxSoFar = c[0];
    for(let i = 1, len = c.length; i < len; i++){
        let midpoint = ~~((c[i] - c[i-1]) / 2);
        if(midpoint > maxSoFar) {
            maxSoFar = midpoint;
        }
    }
    let lastDist = (n - 1) - c[c.length-1];
    return maxSoFar > lastDist? maxSoFar : lastDist;
}
