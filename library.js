var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
function getFactorial(input) {
    var multiplier = input - 1;
    var result = input;
    while (multiplier > 1) {
        result = result * multiplier;
        multiplier--;
    }
    return result;
}
function subtractArr(input, arrOfExtra) {
    var result = input.filter(function (el) { return !arrOfExtra.includes(el); });
    return result;
}
function getScreenRatio() {
    var screenRatio = (document.documentElement.clientHeight / document.documentElement.clientWidth).toFixed(3);
    return screenRatio;
}
function kmsToMls(kms) {
    var miles = kms / 1.609;
    return miles;
}
function mlsToKms(miles) {
    var kms = miles * 1.609;
    return kms;
}
function celsToFahr(celsius) {
    var fahrenheit = ((celsius * 1.8) + 32).toFixed(1);
    return fahrenheit;
}
function fahrToCels(fahrenheit) {
    var celsius = ((fahrenheit - 32) / 1.8).toFixed(1);
    return celsius;
}
function bubbleSort(input) {
    var result = __spreadArray([], input, true);
    for (var q = 0; q < result.length; q++) {
        for (var r = 1; r < result.length; r++) {
            if (result[r] < result[r - 1]) {
                var buff = result[r];
                result[r] = result[r - 1];
                result[r - 1] = buff;
            }
        }
    }
    return result;
}
function shakerSort(input) {
    var result = __spreadArray([], input, true);
    var indexLeft = 0;
    var indexRight = result.length - 1;
    while (indexLeft <= indexRight) {
        for (var q = indexRight; q > indexLeft; q--) {
            if (result[q - 1] > result[q]) {
                var buff = result[q];
                result[q] = result[q - 1];
                result[q - 1] = buff;
            }
        }
        indexLeft++;
        for (var r = indexLeft; r < indexRight; r++) {
            if (result[r] > result[r + 1]) {
                var buff = result[r];
                result[r] = result[r + 1];
                result[r + 1] = buff;
            }
        }
        indexRight--;
    }
    return result;
}
function selectionSort(input) {
    var result = __spreadArray([], input, true);
    var startIndex = 0;
    while (startIndex < result.length - 1) {
        var minIndex = startIndex;
        var numMin = result[minIndex];
        for (var q = startIndex; q < result.length; q++) {
            if (result[q] < numMin) {
                numMin = result[q];
                minIndex = q;
            }
        }
        var buff = result[startIndex];
        result[startIndex] = numMin;
        result[minIndex] = buff;
        startIndex++;
    }
    return result;
}
function mergeSort(input) {
    function merge(arr1, arr2) {
        var result = [];
        var q = 0;
        var r = 0;
        while (q < arr1.length && r < arr2.length) {
            result.push((arr1[q] < arr2[r]) ?
                arr1[q++] : arr2[r++]);
        }
        return __spreadArray(__spreadArray(__spreadArray([], result, true), arr1.slice(q), true), arr2.slice(r), true);
    }
    if (input.length === 1) {
        return input;
    }
    else {
        var result = __spreadArray([], input, true);
        var middle = Math.floor(result.length / 2);
        var arrLeft = result.slice(0, middle);
        var arrRight = result.slice(middle);
        return merge(mergeSort(arrLeft), mergeSort(arrRight));
    }
}
function getMinsOfArr(input, numOfMins) {
    var copy = __spreadArray([], input, true);
    var mins = [];
    function getMin() {
        var numMin = copy[0];
        var minIndex = 0;
        for (var q = 1; q < copy.length; q++) {
            if (copy[q] < numMin) {
                numMin = copy[q];
                minIndex = q;
            }
        }
        mins.push(numMin);
        copy.splice(minIndex, minIndex + 1);
    }
    for (var r = 0; r < numOfMins; r++) {
        getMin();
    }
    if (numOfMins === 1) {
        return mins[0];
    }
    else {
        return mins;
    }
}
function getMaxsOfArr(input, numOfMaxs) {
    var copy = __spreadArray([], input, true);
    var maxs = [];
    function getMaxs() {
        var numMax = copy[0];
        var maxIndex = 0;
        for (var q = 1; q < copy.length; q++) {
            if (copy[q] > numMax) {
                numMax = copy[q];
                maxIndex = q;
            }
        }
        maxs.push(numMax);
        copy.splice(maxIndex, maxIndex + 1);
    }
    for (var r = 0; r < numOfMaxs; r++) {
        getMaxs();
    }
    if (numOfMaxs === 1) {
        return maxs[0];
    }
    else {
        return maxs;
    }
}
function hasDuplicates(input) {
    var copy = __spreadArray([], input, true);
    copy = copy.sort();
    for (var q = 1; q < copy.length; q++) {
        if (copy[q] === copy[q - 1]) {
            return true;
        }
    }
    return false;
}
function getDuplicates(input) {
    var copy = __spreadArray([], input, true);
    var duplicates = [];
    copy = copy.sort();
    for (var q = 1; q < copy.length; q++) {
        if (copy[q] === copy[q - 1]) {
            duplicates.push(copy[q]);
        }
    }
    if (duplicates.length === 0) {
        return -1;
    }
    (function reduceDuplicates() {
        for (var r = 1; r < duplicates.length; r++) {
            if (duplicates[r] === duplicates[r - 1]) {
                duplicates.splice(r - 1, 1);
                reduceDuplicates();
            }
        }
    }());
    if (duplicates.length === 1) {
        return duplicates[0];
    }
    else {
        return duplicates;
    }
}
function deleteBiggerThan(input, num) {
    var result = input.filter(function (el) { return el <= num; });
    return result;
}
function deleteSmallerThan(input, num) {
    var result = input.filter(function (el) { return el >= num; });
    return result;
}
// -------------- 21 functions
