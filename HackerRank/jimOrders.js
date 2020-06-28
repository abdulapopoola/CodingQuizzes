
function jimOrders(orders) {
    let sums = [];
    let map = {};
    for(let i = 0, len = orders.length; i < len; i++){
        let sum = orders[i].reduce((acc, curr) => acc + curr);
        if(!map[sum]){
            map[sum] = [];
            sums.push(sum);
        }
        map[sum].push(i+1);
    }
    let sorted = sums.sort((a,b) => a - b);
    let ordering = [];
    for(let i = 0, len = sorted.length; i < len; i++){
        let values = map[sorted[i]];
        [].push.apply(ordering, values);
    }
    return ordering;
}
