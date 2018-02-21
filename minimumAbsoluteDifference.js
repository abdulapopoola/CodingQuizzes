function minimumAbsoluteDifference(n, arr) {
    let sorted = arr.sort((a,b) => a - b);
    let minDiff = Infinity;
    for(let i = 1; i < n; i++){
        minDiff = Math.min(minDiff, Math.abs(arr[i] - arr[i-1]));
    }
    return minDiff;
}
