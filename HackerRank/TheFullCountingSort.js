function main() {
    var n = parseInt(readLine());
    var arr = new Array(100);
    for(var a0 = 0; a0 < n; a0++){
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var s = x_temp[1];
        if(a0 < (n/2)){
            let arrSlot = arr[x] || [];
            arrSlot.push('-');
            arr[x] = arrSlot;
        } else {
            let arrSlot = arr[x] || [];
            arrSlot.push(s);
            arr[x] = arrSlot;
        }
    }
    let reduced = arr.reduce((acc, curr, i) => {
        if(i) {
            return acc + ' ' + curr.join(' ');
        } else {
            return curr.join(' ');
        }
    }, '');
    console.log(reduced);
}The Full Counting Sort
