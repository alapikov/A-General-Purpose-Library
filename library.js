function isLatinLetter(letter) {
    if (letter.length >= 2) {
        console.error("' ".concat(letter, " '") + ' consists of two or more letters! Use only one-letter string as a parameter.');
    }
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (var q = 0; q < 26; q++) {
        if (letter.toLowerCase() === alphabet[q]) {
            return true;
        }
    }
    return false;
}
function isNumStringified(numStr) {
    if (isNaN(Number(numStr))) {
        return false;
    }
    if (numStr.length === 0) {
        return false;
    }
    return true;
}
function toCamelCase(input) {
    if (input.length === 0) {
        console.error('Input is empty string. Input must have at least one character.');
    }
    var modifiedStr = input.toLowerCase().split('');
    for (var q = 1; q < modifiedStr.length; q++) {
        if (isLatinLetter(modifiedStr[q]) && !isLatinLetter(modifiedStr[q - 1])) {
            modifiedStr[q] = modifiedStr[q].toUpperCase();
        }
    }
    var camelCased = modifiedStr.join('').replace(/\W/g, '');
    return camelCased;
}
function strToHashtag(input) {
    var camelCased = toCamelCase(input).split('');
    camelCased[0] = camelCased[0].toUpperCase();
    camelCased.unshift('#');
    var result = camelCased.join('');
    return result;
}
function isKeyboardSymbol(symbol) {
    if (symbol.length >= 2) {
        console.error("' ".concat(symbol, " '") + ' consists of two or more symbols! Use only one-symbol string as a parameter.');
    }
    if (symbol.match(/[^A-Za-z0-9]/)) {
        return true;
    }
    return false;
}
