"use strict";

// Задача 5.
// Дано масив елементів. Знайти добуток додатних елементів.

const arrNumbers = [1, -2, 3, -4, 5, -6, 7, -8, 10];

function getProductPositiveNumbers(arr) {
	let result = 1;

	for (let num of arr) {
		if (num > 0) result *= num;
	}

	return result
}

const productResult = getProductPositiveNumbers(arrNumbers);

document.write(`
<p>Масив елементів: [${arrNumbers}]</p>
<p>Добуток додатних елементів: ${productResult}</p>
`);
