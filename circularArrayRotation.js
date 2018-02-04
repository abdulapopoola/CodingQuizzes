function circularArrayRotation(a, k, m) {
    let aLen = a.length;
    k = k % aLen;
    return m.map(v => {
        let originalIndex = (v - k + aLen) % aLen;
        return a[originalIndex];
    });
}
