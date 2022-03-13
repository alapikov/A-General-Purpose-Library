function isLatinLetter(letter: string) {
    if (letter.length >= 2) {
        console.error(`' ${letter} '` + ' consists of two or more letters! Use only one-letter string as a parameter.');
    }
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let q = 0; q < 26; q++) {
        if (letter.toLowerCase() === alphabet[q]) {
            return true;
        }
    }
    return false;
}

function isNumStringified(numStr: string) {
    if (isNaN(Number(numStr))) {
        return false
    }
    if (numStr.length === 0) {
        return false
    }
    return true;
}

function toCamelCase(input: string) {
    if (input.length === 0) {
        console.error('Input is empty string. Input must have at least one character.')
    }
    let modifiedStr = input.toLowerCase().split('');
    for (let q = 1; q < modifiedStr.length; q++) {
        if (isLatinLetter(modifiedStr[q]) && !isLatinLetter(modifiedStr[q - 1])) {
            modifiedStr[q] = modifiedStr[q].toUpperCase();
        }
    }
    const camelCased = modifiedStr.join('').replace(/\W/g, '');
    return camelCased
}

function strToHashtag(input: string) {
    let camelCased = toCamelCase(input).split('');
    camelCased[0] = camelCased[0].toUpperCase();
    camelCased.unshift('#');
    const result = camelCased.join('');
    return result;

}

function isKeyboardSymbol(symbol: string) {
    if (symbol.length >= 2) {
        console.error(`' ${symbol} '` + ' consists of two or more symbols! Use only one-symbol string as a parameter.');
    }
    if (symbol.match(/[^A-Za-z0-9]/)) {
        return true
    }
    return false;
}