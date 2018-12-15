var zeroFilled = val => new Array(val + 1).fill(0);

function medianForCountingSort(countSortArr, len) {
    let midpoint = len / 2;
    let isEven = len % 2 === 0 ? true : false;

    let sum = 0;
    let medianIndex = 0;
    let upperLimit = countSortArr.length;
    while (medianIndex < upperLimit) {
        sum += countSortArr[medianIndex];
        if (sum >= midpoint) {
            break;
        }
        medianIndex++;
    }

    if (isEven && midpoint >= sum) {
        // Handle cases where the median falls into the right half of the even array
        let upperMedianIndex = medianIndex + 1;
        while (upperMedianIndex < upperLimit) {
            sum += countSortArr[upperMedianIndex];
            if (sum >= midpoint + 1) {
                break;
            }
            upperMedianIndex++;
        }
        return (medianIndex + upperMedianIndex) / 2;
    }

    return medianIndex;
}

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    let subset = expenditure.slice(0, d);
    let maxValue = 201;
    let countSortArr = zeroFilled(maxValue);
    for (let val of subset) {
        countSortArr[val]++;
    }

    let median = 0;
    let noticeCount = 0;
    for (let i = d, len = expenditure.length; i < len; i++) {
        median = medianForCountingSort(countSortArr, d);
        let compare = expenditure[i];
        if (2 * median <= compare) {
            noticeCount++;
        }

        // remove leftmost
        let shiftValue = subset.shift();
        countSortArr[shiftValue]--;

        // append rightmost
        subset.push(compare);
        countSortArr[compare]++;
    }

    return noticeCount;
}
