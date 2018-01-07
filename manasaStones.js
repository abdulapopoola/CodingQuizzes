function stones(n, a, b) {
    let processor = function(index) {
        if(index === n -1){
            return [a,b];
        }
        let val = processor(index+1);
        let response = [];
        let newArrA = val.map(v => v + a);
        let newArrB = val.map(v => v + b);
        [].push.apply(response, newArrA);
        [].push.apply(response, newArrB);
        return response;        
    }
    
    return new Set( processor(1));    
}
