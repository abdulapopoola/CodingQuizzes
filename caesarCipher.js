const UPPERCASE_A_CHARCODE = 65; //A
const UPPERCASE_Z_CHARCODE = 90; //Z
const LOWERCASE_A_CHARCODE = 97; //a
const LOWERCASE_Z_CHARCODE = 122; //z
const ALPHABET_COUNT = 26;

function isLowerCaseCharCode(charCode) {
    return charCode >= LOWERCASE_A_CHARCODE && charCode <= LOWERCASE_Z_CHARCODE;
}

function isUpperCaseCharCode(charCode) {
    return charCode >= UPPERCASE_A_CHARCODE && charCode <= UPPERCASE_Z_CHARCODE;
}

function caesarCipher(s, k) {
    var chars = s.split('');
    var shifted = [];
    shiftCount = k;
    while (shiftCount < 0) {
        shiftCount += ALPHABET_COUNT;
    }

    for (var i = 0, len = chars.length; i < len; i++) {
        var charCode = chars[i].charCodeAt(0);
        var newCharCodeOffset;
        var newChar;
        if (isLowerCaseCharCode(charCode)) {
            newCharCodeOffset = (charCode - LOWERCASE_A_CHARCODE + shiftCount) % ALPHABET_COUNT;
            newChar = String.fromCharCode(newCharCodeOffset + LOWERCASE_A_CHARCODE);
            shifted.push(newChar);
        } else if (isUpperCaseCharCode(charCode)) {
            newCharCodeOffset = (charCode - UPPERCASE_A_CHARCODE + shiftCount) % ALPHABET_COUNT;
            newChar = String.fromCharCode(newCharCodeOffset + UPPERCASE_A_CHARCODE);
            shifted.push(newChar);
        } else {
            shifted.push(chars[i]);
        }
    }
    return shifted.join('');
}
