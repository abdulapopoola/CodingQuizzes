function largestPermutation(k, arr) {
    let sorted = [...arr].sort((a,b) => b - a);
    let swapCount = 0;
    let i = 0;
    while(swapCount < k && i < arr.length){
        let current = sorted[i];
        if(arr[i] !== current){
            swapCount++;
            let index = arr.indexOf(current, i);
            arr[index] = arr[i];
            arr[i] = current;
        }
        i++;
    }
    return arr;
}
