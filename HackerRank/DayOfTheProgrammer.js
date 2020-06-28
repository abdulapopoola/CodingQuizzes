function solve(year){    
    if (year === 1918) {
        return `26.09.${year}`;
    } 
    
    let isLeapYear = year < 1918 ? 
        (year % 4 === 0):
        ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0)));
    
    return isLeapYear ? `12.09.${year}` : `13.09.${year}`;
}
