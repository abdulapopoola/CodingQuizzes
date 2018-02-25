function howManyGames(p, d, m, s) {
    let count = 0;    
    while(s > m) {
        s = s - p;
        p = Math.max(p - d, m);
        count++;
    }
    return count;
}
