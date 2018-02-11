function reduce(str){
    let reduced = '';
    let arr = str.split('');
    for (let i = 1, len = str.length; i < len; i++){
        if(arr[i-1] === arr[i]){
            arr[i] = false;
            arr[i-1] = false;
        }
    }
    return arr.filter(x => x).join('');
}

function super_reduced_string(s){
    let firstPass = reduce(s);
    while(firstPass.length !== reduce(firstPass).length){
        firstPass = reduce(firstPass);
    }
    if(!firstPass.length){
        return 'Empty String';
    }
    return firstPass;
}
