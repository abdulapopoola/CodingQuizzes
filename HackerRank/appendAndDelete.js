function appendAndDelete(s, t, k) {
    let sLen = s.length;
    let tLen = t.length;
    
    if(k >= sLen + tLen){
        return true;
    }
    
    let smaller = Math.min(sLen, tLen);      
    let i = 0;    
    for(; i < smaller; i++){
        if(s[i] !== t[i]){
            break;
        }
    }
    
    if(sLen === tLen && i === sLen){
        return !(k & 1);
    }
    
    k = k - (sLen - i) - (tLen - i);
    return !((k < 0) || (k & 1));
}
