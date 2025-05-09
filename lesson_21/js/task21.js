"use strict";

// Задача 4.
// Сформувати масив з 1000 елементів від 1 до 800.
// Порівняти час сортування бульбашкою і  вставкою.

function getRandomArray(arrayLength = 1000, minValue = 1, maxValue = 800) {
	return Array.from(
		{ length: arrayLength },
		() => minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	);
}

const array = getRandomArray();

console.log('array', array);

function getBubbleSortTime(arr) {
	const arr2 = [...arr];

	const start = new Date();

	let endIndex = arr2.length;
	let change;

	do {
		change = false;
		for (let i = 1; i < endIndex; i++) {
			if (arr2[i - 1] > arr2[i]) {
				const temp = arr2[i - 1];
				arr2[i - 1] = arr2[i];
				arr2[i] = temp;
				change = true;
			}
		}
		endIndex--;
	} while (change);

	const end = new Date();
	return ((end - start) / 1000).toFixed(3);
}

function getInsertionSortTime(arr) {
	const arr2 = [...arr];

	const start = new Date();

	for (let k = 1; k < arr2.length; k++) {
	let	currentElement = arr2[k];
		let i = k - 1;
		while (i >= 0 && arr2[i] > currentElement) {
			arr2[i + 1] = arr2[i];
			i--;
		}

		arr2[i + 1] = currentElement;
	}

	const end = new Date();
	return ((end - start) / 1000).toFixed(3);
}

const bubbleSortTime = getBubbleSortTime(array);

console.log("bubbleSortTime", bubbleSortTime);

const insertionSortTime = getInsertionSortTime(array);

console.log("insertionSortTime", insertionSortTime);

const result = `
<p>Час сортування бульбашкою: ${bubbleSortTime} сек.</p>
<p>Час сортування вставкою: ${insertionSortTime} сек.</p>
`;

const wrapper = document.querySelector(".result-wrapper");
wrapper.innerHTML = result;