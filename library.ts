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
		return false;
	}
	if (numStr.length === 0) {
		return false;
	}
	return true;
}

function toCamelCase(input: string) {
	if (input.length === 0) {
		console.error('Input is empty string. Input must have at least one character.');
	}
	let modifiedStr = input.toLowerCase().split('');
	for (let q = 1; q < modifiedStr.length; q++) {
		if (isLatinLetter(modifiedStr[q]) && !isLatinLetter(modifiedStr[q - 1])) {
			modifiedStr[q] = modifiedStr[q].toUpperCase();
		}
	}
	const camelCased = modifiedStr.join('').replace(/\W/g, '');
	return camelCased;
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
		return true;
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

function getFactorialRecursive(input: number) {
	if (input === 1) {
		return input;
	} else return input * getFactorialRecursive(input - 1);
}

function getFibonacciSeq(numOfElems: number) {
	const sequence = [1, 1];
	for (let q = 2; q < numOfElems; q++) {
		const l = sequence.length;
		const nextItem = sequence[l - 1] + sequence[l - 2];
		sequence.push(nextItem);
	}
	return sequence;
}

function getFibonacciItem(index: number) {
	if (index === 1 || index === 2) {
		return 1;
	}
	return getFibonacciItem(index - 1) + getFibonacciItem(index - 2);
}

function subtractArr(input: (string | number)[], arrOfExtra: (string | number)[]) {
	let result = input.filter((el) => !arrOfExtra.includes(el));
	return result;
}

function getScreenRatio() {
	const screenRatio = (document.documentElement.clientHeight / document.documentElement.clientWidth).toFixed(3);
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
	const fahrenheit = (celsius * 1.8 + 32).toFixed(1);
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
				result[q - 1] = buff;
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
		while (q < arr1.length && r < arr2.length) {
			result.push(arr1[q] < arr2[r] ? arr1[q++] : arr2[r++]);
		}
		return [...result, ...arr1.slice(q), ...arr2.slice(r)];
	}

	if (input.length === 1) {
		return input;
	} else {
		const result = [...input];
		const middle = Math.floor(result.length / 2);
		const arrLeft = result.slice(0, middle);
		const arrRight = result.slice(middle);
		return merge(mergeSort(arrLeft), mergeSort(arrRight));
	}
}

function quickSort(input: number[]) {}

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
	for (let r = 0; r < numOfMins; r++) {
		getMin();
	}
	if (numOfMins === 1) {
		return mins[0];
	} else {
		return mins;
	}
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
	for (let r = 0; r < numOfMaxs; r++) {
		getMaxs();
	}
	if (numOfMaxs === 1) {
		return maxs[0];
	} else {
		return maxs;
	}
}

function hasDuplicates(input: (number | string)[]) {
	let copy = [...input];
	copy = copy.sort();
	for (let q = 1; q < copy.length; q++) {
		if (copy[q] === copy[q - 1]) {
			return true;
		}
	}
	return false;
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
	})();
	if (duplicates.length === 1) {
		return duplicates[0];
	} else {
		return duplicates;
	}
}

function deleteBiggerThan(input: number[], num: number) {
	let result = input.filter((el) => el <= num);
	return result;
}

function deleteSmallerThan(input: number[], num: number) {
	let result = input.filter((el) => el >= num);
	return result;
}

function roundDecimalNum(num: number, decimals: number) {
	let index = 10 ** decimals;
	return Math.round((num + Number.EPSILON) * index) / index;
} 

function getRandomArr(length: number, min: number, max: number, decimals: number = 0) {
	const resultArr = [];
	let indexB = 10 ** decimals;
	let indexA = roundDecimalNum(10 ** (-1 * decimals), decimals);
	for (let q = 1; q <= length; q++) {
		let item = Math.floor(Math.random() * (max - min + 1) + min) + indexA * (Math.floor(Math.random() * indexB));
		item = roundDecimalNum(item, decimals);
		if (item > max) {
			item = item - 1;
		}
		resultArr.push(item);
	}
	return resultArr;
}

function sumEveryNth(arr: number[], n: number) {
	let result = 0;
	for (let q = (n - 1); q < arr.length; q = q + n) {
		result = result + arr[q];
	}
	return result;
}

function multiplyEveryNth(arr: number[], n: number) {
	let result = 1;
	for (let q = (n - 1); q < arr.length; q = q + n) {
		result = result * arr[q];
	}
	return result;
}

function getPowerRecursive(num: number, exp: number) {
	if (exp === 0) {
		return 1
	} else {
		return num * getPowerRecursive(num, exp - 1); 
	}
	
}

function getFileName(input: string) {
	const regexp = /\w+\./;
	let fileName = input.match(regexp);
	fileName = fileName[0].slice(0, -1);
	return fileName;
}

function getFileNameFull(input: string) {
	const regexp = /\w+\.\w+/;
	let fileName = input.match(regexp);
	return fileName;
}

function searchSimple(input: (string | number)[], item: string | number) {
	for (let q = 0; q < input.length; q++) {
		if (input[q] === item) {
			return q;
		}
	}
	return null;
}

function searchBinary(input: number[], item: number) {
	let copy = [...input];
	let arrStart = 0;
	let arrEnd = copy.length;
	let middleIndex;
	let itemIsFound = false;
	while (itemIsFound === false && arrStart <= arrEnd) {
		middleIndex = Math.floor((arrStart + arrEnd) / 2);
		if (copy[middleIndex] === item) {
			itemIsFound = true;
			return middleIndex;
		}
		if (copy[middleIndex] > item) {
			arrEnd = middleIndex - 1;
		} else if (copy[middleIndex] < item) {
			arrStart = middleIndex + 1;
		}
	}
	if (itemIsFound === false) {
		return null;
	}
}

function graphBreadthSearch(graph: {}, start: string, end: string) {
	let queue = [];
	queue.push(start);
	while (queue.length > 0) {
		const nodeCurrent = queue.shift();
		if (!graph[nodeCurrent]) {
			graph[nodeCurrent] = [];
		}
		if (graph[nodeCurrent].includes(end)) {
			return true;
		} else {
			queue = [...queue, ...graph[nodeCurrent]];
		}
	}
	return false;
}

class TreeNode {
	constructor(value: string, descendants: string[]) {
		this.value = value;
		this.descs = descendants;
	}
	get numOfDescs() {
		return this.descs.length;
	}
}

class BinaryDigitTreeNode {
	constructor(value: number | null, descRight: { value: number | null; descRight: {}; decsLeft: {} }, descLeft: { value: number | null; descRight: {}; decsLeft: {} }) {
		this.value = value;
		this.descRight = descRight;
		this.descLeft = descLeft;
	}
}

function isValid_BinaryDigitTree(input: {}) {
	if (typeof input.value !== 'number') {
		return false;
	}
	if (typeof input.descRight.value !== ('number' || 'object') && typeof input.descLeft.value !== ('number' || 'object')) {
		return false;
	} else {
		isValid_BinaryDigitTree(input.decsRight);
		isValid_BinaryDigitTree(input.decsLeft);
	}
	return true;
}

function isValidFilename(filename: string, ext: string) {
	const regexp = new RegExp('\\.' + ext + '$');
	if (filename.match(regexp)) {
		return true;
	} else {
		return false;
	}
}

function formatPhoneNumber(input: number) {
	let numArr = input.toString().split('');
	let wrongStyle = false;
	if (numArr[0] === '8') {
		wrongStyle = true;
	}
	numArr.splice(1, 0, ' (');
	numArr.splice(5, 0, ') ');
	numArr.splice(9, 0, '-');
	numArr.splice(12, 0, '-');
	if (wrongStyle === true) {
		numArr[0] = '7';
		numArr.unshift('+');
	} else {
		numArr.unshift('+');
	}
	return numArr.join('');
}

function correctText(input: string) {
	let text = input.split('');
	if (text[0].toLowerCase() === text[0]) {
		text[0] = text[0].toUpperCase();
	}
	for (let q = 1; q < text.length; q++) {
		if (text[q].match(/\W/) && text[q - 1] === text[q]) {
			text.splice(q - 1, 1);
			q--;
		}
	}
	return text.join('');
}

//-------------- 40 functions
