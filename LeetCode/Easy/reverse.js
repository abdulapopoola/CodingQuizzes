function reverse(x) {
	const isNegative = x < 0;
	if(isNegative) {
		x = -x;
	}
    
    let reversed = 0;
    while(x > 0) {
        let reminder = x % 10;
        x = Math.floor(x / 10);
        reversed = reversed*10 + reminder;
    }
    
    const maxValue = Math.pow(2, 31);
    const isInRange = isNegative && maxValue >= reversed || maxValue - 1 >= reversed;
    
	if(!isInRange) {
		// overflow
		return 0;
	}

	return isNegative ? -reversed : reversed;
}

reverse(123);
