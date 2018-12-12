function lilysHomework(arr) {
    let swapCounter = (originalArr, orderedArr, indexMap) => {
        let swapCount = 0;
        let copy = [...originalArr];
        for (let i = 0, len = originalArr.length; i < len; i++) {
            let currentElem = copy[i];
            let sortedElem = orderedArr[i];
            if (sortedElem !== currentElem) {
                swapCount++;
                let origTargetIndex = indexMap[currentElem];
                let sortTargetIndex = indexMap[sortedElem];
                indexMap[currentElem] = sortTargetIndex;
                indexMap[sortedElem] = origTargetIndex;
                copy[origTargetIndex] = sortedElem;
                copy[sortTargetIndex] = currentElem;
            }
        }
        return swapCount;
    };

    let sortedAsc = [...arr].sort((a, b) => a - b);
    let sortedDesc = [...arr].sort((a, b) => b - a);
    let indexMap = {};
    for (let i = 0, len = arr.length; i < len; i++) {
        indexMap[arr[i]] = i;
    }
    let indexMap1 = Object.assign({}, indexMap);

    return Math.min(
        swapCounter(arr, sortedAsc, indexMap),
        swapCounter(arr, sortedDesc, indexMap1));
}
