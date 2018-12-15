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
        let nextIndex = medianIndex + 1;
        let nextSum = sum + countSortArr[nextIndex];
        let nextMidpoint = midpoint + 1;

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

// pass in countSorted array
// change the values by using a n-size queue
// pop and decrease count in countSorted array
// push latest and increase count in countSorted
// compare median * 2 with new value

function assert(actual, expected) {
    if(actual !== expected) {
        throw 'Assert failed!';
    }
    console.log('Success!', actual, expected);
}

assert(median([1,3,3,6,6,7,8,9], 9), 6);
assert(median([4,1,6,3,9,3,7,1,2,1,1,1,1,1], 9), 1.5);
assert(median([3,3,5,6,7,8], 9), 5.5);
