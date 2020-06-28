function calc(x, n, num){
    let raised = Math.pow(num, n);
    if(raised > x){
        return 0;
    } else if (raised === x) {
        return 1;
    } else {
        return calc(x, n, num + 1)
            + calc(x-raised, n, num+1)
    }
}

function powerSum(X, N) {
    return calc(X, N, 1);
}
