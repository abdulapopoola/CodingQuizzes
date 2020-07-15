/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, value) {
    if (!arr.length || !Number.isFinite(value)) {
        return -1;
    }

    return binarySearchHelper(arr, value, 0, arr.length);
};

function binarySearchHelper(arr, value, low, high) {
    if(low > high) {
        return -1;
    }

    let midpoint = Math.floor((low + high)/2);
    let midpointValue = arr[midpoint];
    if(midpointValue === value) {
        return midpoint;
    }

    if (midpointValue > value) {
        return binarySearchHelper(arr, value, low, midpoint -1);
    } else {
        return binarySearchHelper(arr, value, midpoint+1, high)
    }
}
