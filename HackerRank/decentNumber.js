function decentNumber(n) {
    if(n%3 === 0) {
        return new Array(n).fill(5).join('');
    }
    
    let newN = n;
    while(newN >= 5){
        newN -= 5;
        if(newN%3 === 0){
            let arr = new Array(n);
            for(i = 0; i < n; i++){
                let val = i < newN ? 5 : 3;
                arr.push(val);
            }
            return arr.join('');
        }
    }
    
    if(newN === 0) {
        return new Array(n).fill(3).join('');
    }
    
    return -1;
}
