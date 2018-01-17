function chocolateFeast(n, c, m) {
    let count = ~~(n / c);
    let wrappers = count; 
    while(wrappers >= m){
        let newCount = ~~(wrappers / m);
        count += newCount;        
        wrappers = newCount + (wrappers % m);
    }
    return count;
}
