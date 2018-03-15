var units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var multiples = ['twenty']; 

function getHourStringValue(h) {
    if (h === 20){
        return multiples[0];        
    } else if (h > 20) {
        return multiples[0] + ' ' + units[h%20];
    } else if(h >= 10){
        return tens[h%10];
    } else {
        return units[h];
    }
}

function getMinutesStringValue(m) {
    if (m === 0) {
        return 'o clock';
    } else if (m === 15) {
        return 'quarter past';
    } else if (m === 30) {
        return 'half past';
    } else if (m === 45) {
        return 'quarter to'
    }
    
    var pastMidway = false;
    if (m > 30){
        m = 60 - m;
        pastMidway = true;
    }
    
    let minutesText = m === 1 ? 'minute' : 'minutes'
    let stringValue = getHourStringValue(m) + ' ' + minutesText;
    if(pastMidway){
        return stringValue + ' to';
    } else {
        return stringValue + ' past';
    }
}

function timeInWords(h, m) {
    if(m === 0){
        return getHourStringValue(h) + " o' clock";
    }
    if(m > 30){
        h++;
    }
    return getMinutesStringValue(m) + ' ' + getHourStringValue(h);
}
