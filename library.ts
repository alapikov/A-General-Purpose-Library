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

function getFactorial(input: number) {
    let multiplier = input - 1;
    let result = input;
    while (multiplier > 1) {
        result = result * multiplier;
        multiplier--;
    }
    return result;
}

function subtractArr(input: (string | number)[], arrOfExtra: (string | number)[]) {    
    let result = input.filter(el => !arrOfExtra.includes(el));
    return result;
}

function getScreenRatio() {
    const screenRatio = (document.documentElement.clientHeight  / document.documentElement.clientWidth).toFixed(3);
    return screenRatio;
}

function kmsToMls(kms: number) {
    const miles = kms / 1.609;
    return miles;
}

function mlsToKms(miles: number) {
    const kms = miles * 1.609;
    return kms;
}

function celsToFahr(celsius: number) {
    const fahrenheit = ((celsius * 1.8) + 32).toFixed(1);
    return fahrenheit;
}

function fahrToCels(fahrenheit: number) {
    const celsius = ((fahrenheit - 32) / 1.8).toFixed(1);
    return celsius;
}

function bubbleSort(input: number[]) {
    const result = [...input];
    for (let q = 0; q < result.length; q++) {
        for (let r = 1; r < result.length; r++) {
            if (result[r] < result[r - 1]) {
                const buff = result[r];
                result[r] = result[r - 1];
                result[r - 1] = buff;
            }
        }
    }
    return result;
}

function shakerSort(input: number[]) {
    const result = [...input];
    let indexLeft = 0;
    let indexRight = result.length - 1;
    while (indexLeft <= indexRight) {
        for (let q = indexRight; q > indexLeft; q--) {
            if (result[q - 1] > result[q]) {
                const buff = result[q];
                result[q] = result[q - 1];
                result[q - 1] = buff
            }
        }
        indexLeft++;
        for (let r = indexLeft; r < indexRight; r++) {
            if (result[r] > result[r + 1]) {
                const buff = result[r];
                result[r] = result[r + 1];
                result[r + 1] = buff;
            }
        }
        indexRight--;
    }
    return result;
}

function selectionSort(input: number[]) {
    const result = [...input];
    let startIndex = 0;
    while (startIndex < result.length - 1) {
        let minIndex = startIndex;
        let numMin = result[minIndex];
        for (let q = startIndex; q < result.length; q++) {
            if (result[q] < numMin) {
                numMin = result[q];
                minIndex = q;
            }
        }
        const buff = result[startIndex];
        result[startIndex] = numMin;
        result[minIndex] = buff;
        startIndex++;
    }
    return result;
}

function mergeSort(input: number[]) {
    function merge(arr1, arr2) {
        const result = [];
        let q = 0;
        let r = 0;
        while(q < arr1.length && r < arr2.length) {
            result.push(
                (arr1[q] < arr2[r]) ?
                arr1[q++] : arr2[r++]
            )
        }
        return [...result, ...arr1.slice(q), ...arr2.slice(r)]
    }

    if (input.length === 1) {
        return input
    } else {
        const result = [...input];
        const middle = Math.floor(result.length / 2);
        const arrLeft = result.slice(0, middle);
        const arrRight = result.slice(middle);
        return merge(mergeSort(arrLeft), mergeSort(arrRight));
    }
}

function getMinsOfArr(input: number[], numOfMins: number) {
    const copy = [...input];
    const mins: number[] = [];
    function getMin() {
        let numMin = copy[0];
        let minIndex = 0;
        for (let q = 1; q < copy.length; q++) {
            if (copy[q] < numMin) {
                numMin = copy[q];
                minIndex = q;
            }
        }
        mins.push(numMin);
        copy.splice(minIndex, minIndex + 1);
    }
    for (let r = 0; r < numOfMins; r++) { getMin() }
    if (numOfMins === 1) {
        return mins[0];
    } else {return mins}    
}

function getMaxsOfArr(input: number[], numOfMaxs: number) {
    const copy = [...input];
    const maxs: number[] = [];
    function getMaxs() {
        let numMax = copy[0];
        let maxIndex = 0;
        for (let q = 1; q < copy.length; q++) {
            if (copy[q] > numMax) {
                numMax = copy[q];
                maxIndex = q;
            }
        }
        maxs.push(numMax);
        copy.splice(maxIndex, maxIndex + 1);
    }
    for (let r = 0; r < numOfMaxs; r++) { getMaxs() }
    if (numOfMaxs === 1) {
        return maxs[0];
    } else {return maxs}    
}

function hasDuplicates(input: (number | string)[]) {
    let copy = [...input];
    copy = copy.sort();
    for (let q = 1; q < copy.length; q++) {
        if (copy[q] === copy[q - 1]) {
            return true;
        }
    }
    return false
}

function getDuplicates(input: (number | string)[]) {
    let copy = [...input];
    let duplicates = [];
    copy = copy.sort();
    for (let q = 1; q < copy.length; q++) {
        if (copy[q] === copy[q - 1]) {
            duplicates.push(copy[q]);
        }
    }
    if (duplicates.length === 0) {
        return -1;
    }
    (function reduceDuplicates() {
        for (let r = 1; r < duplicates.length; r++) {
            if (duplicates[r] === duplicates[r - 1]) {
                duplicates.splice(r - 1, 1);
                reduceDuplicates();
            }
        }
    } ());
    if (duplicates.length === 1) {
        return duplicates[0];
    } else {
        return duplicates;
    }
}

function deleteBiggerThan(input: number[], num: number) {
    let result = input.filter(el => el <= num)
    return result;
}

function deleteSmallerThan(input: number[], num: number) {
    let result = input.filter(el => el >= num)
    return result;
}

// -------------- 21 functions