function stones(n, a, b) {
    n--; // first element is always 0
    if(a === b){
        return [n*a];
    }
    
    let entries = [];
    for(let i = 0; i <= n; i++){
        let value = a*(n-i) + b*i;
        entries.push(value);
    }
    return entries.sort((a,b) => a - b);
}
