let reverseStr = (s) => s.split('').reverse().join('');
let removeCharAt = (s, index) => s.substr(0, index) + s.substr(index+1);

function palindromeIndex(s){
    let reversed = reverseStr(s);
    if(reversed === s){
        return -1;
    }
    let sLen = s.length;
    for(let i = 0; i < sLen; i++){
        if(s[i] !== reversed[i]){
            let subStr1 = removeCharAt(s, i);
            if(reverseStr(subStr1) === subStr1){
                return i;
            } else {
                return sLen - i - 1;
            }
        }
    }
}
