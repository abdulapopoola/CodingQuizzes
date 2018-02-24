function beautifulPairs(A, B) {
    let tracker = new Array(1001).fill(0);
    for(let i = 0, len = A.length; i < len; i++) {
        tracker[A[i]]++;
    }
    
    let beautifulPairsCount = 0;
    for(let i = 0, len = B.length; i < len; i++) {
        if(tracker[B[i]] > 0) {
            beautifulPairsCount++;
            tracker[B[i]]--;
        }
    }
    
    return beautifulPairsCount === B.length ?
        --beautifulPairsCount : 
        ++beautifulPairsCount;
    
}
