"use strict";

// Задача 5.
// З використанням замикань розробити ітератор,
// тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального.
// Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.

function createRangeIterator(arr, startIndex = 0) {
	let index = startIndex;

	function getNextIteration() {
		if (index === arr.length) index = 0;
		return arr[index++];
	}

	return getNextIteration;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const iterator = createRangeIterator(months, 10);

for (let i = 10; i < 28; i++) document.write(`<span>${iterator()}</span><br>`);
