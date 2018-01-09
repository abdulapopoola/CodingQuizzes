function squares(a, b) {
    let min = Math.ceil(Math.sqrt(a));
    let max = Math.floor(Math.sqrt(b));
    return max - min + 1;
}
