/*Since the bounds are in the 1 - 100 limits; I decided to go with the brute approach. Otherwise, the mathematical approach of LCMs and GCDs would have been preferred*/

function getTotalX(a, b) {
    const range = (lower, upper) => Array.from(new Array(upper-lower+1), (val, i) => i + lower);
    const lower = Math.max(...a);
    const upper = Math.min(...b);
    if(lower > upper){
        return 0;
    }
    return range(lower, upper)
            .filter(num => a.every(i => num % i === 0) &&
                       b.every(j => j % num === 0))
            .length;
}

