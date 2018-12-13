var range = val => [...Array(val+1).keys()];
var zeroFilled = val => new Array(val+1).fill(0);

function median(arr, maxValue) {
    let countSortArr = zeroFilled(maxValue);

    for(let val of arr){
        countSortArr[val]++;
    }

    let len = arr.length;
    let midpoint = len / 2;
    let isEven = len % 2 === 0 ? true : false;

    let sum = 0;
    let medianIndex = 0;
    while(medianIndex < len + 1) {
        sum += countSortArr[medianIndex];
        if(sum >= midpoint) {
            break;
        }
        medianIndex++;
    }

    if(isEven){
        sum = 0;
        let upperMedianIndex = 0;
        while(upperMedianIndex < len + 1) {
            sum += countSortArr[upperMedianIndex];
            if(sum >= midpoint + 1) {
                break;
            }
            upperMedianIndex++;
        }
        return (medianIndex + upperMedianIndex) / 2;
    }

    return medianIndex;
}
