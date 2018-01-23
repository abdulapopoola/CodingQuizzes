function countOnes(arr1, arr2) {
   return arr1.split('')
       .reduce((acc, current, index) => acc + (+arr1[index] | +arr2[index]), 0);
}

function acmTeam(topic) {
    let max = 0;
    let count = 0;
    for(let i = 0, len = topic.length; i < len; i++) {
        for(let j = i+1; j < len; j++) {
            let outcome = countOnes(topic[i], topic[j]);
            if(outcome > max) {
                max = outcome;
                count = 1;
            } else if (outcome === max) {
                count++;
            }
        }
    }
    return [max, count];
}
