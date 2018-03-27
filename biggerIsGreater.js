function biggerIsGreater(w) {
    let sLen = w.length;
    let inflexionIndex = sLen - 1;
    let hasInflexion = false;
    let arr = w.split('');
    for(let i = sLen - 1; i > 0; i--){
        let charCode = w[i].charCodeAt(0);
        let charCode2 = w[i-1].charCodeAt(0);
        
        if(charCode > charCode2){
            inflexionIndex = i;
            hasInflexion = true;
            break;
        }
    }
    
    if(!hasInflexion) {
        return 'no answer';
    }
    
    let char = arr[inflexionIndex - 1].charCodeAt(0);
    let minIndex = inflexionIndex;
    let min = arr[inflexionIndex].charCodeAt(0);
    for(let j = inflexionIndex; j < sLen; j++){
        let jCode = w[j].charCodeAt(0);
        if(jCode < min && jCode >= char){
            minIndex = j;
        }
    }
    
    let temp = arr[minIndex];
    arr[minIndex] = arr[inflexionIndex - 1];
    arr[inflexionIndex - 1] = temp;
    
    let sort = arr.slice(inflexionIndex).sort();
    let unsorted = arr.slice(0, inflexionIndex);
    return unsorted.join('') + sort.join('');
}
