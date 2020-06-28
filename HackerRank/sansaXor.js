function sansaXor(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++) {
            let sentinel = i;
            while(sentinel <= j){
                let nextPair = arr[sentinel];
                map[nextPair] = map[nextPair] || 0;
                map[nextPair]++;
                sentinel++;
            }
        }
    }
    let result = 0;
    for(let entry in map){
        let count = map[entry];
        if(count & 1){
            result ^= entry;
        }
    }
    return result;
}
