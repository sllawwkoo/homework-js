"use strict";

// Задача 4.
// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів:
// кількість парних,
// кількість додатних,
// кількість більших за 100.

function getAmountEvenNumbers(num1, num2, num3) {
	let counterNumbers = 0;

	if (num1 % 2 === 0) counterNumbers++;
	if (num2 % 2 === 0) counterNumbers++;
	if (num3 % 2 === 0) counterNumbers++;

	return counterNumbers;
}

function getAmountPositiveNumbers(num1, num2, num3) {
	let counterNumbers = 0;

	if (num1 > 0) counterNumbers++;
	if (num2 > 0) counterNumbers++;
	if (num3 > 0) counterNumbers++;

	return counterNumbers;
}

function getAmountNumbersGreaterHundred(num1, num2, num3) {
	let counterNumbers = 0;

	if (num1 > 100) counterNumbers++;
	if (num2 > 100) counterNumbers++;
	if (num3 > 100) counterNumbers++;

	return counterNumbers;
}

function getCalculateMultipleResults(num1, num2, num3) {
	let result
	let evenNumbers = getAmountEvenNumbers(num1, num2, num3);
	let positiveNumbers = getAmountPositiveNumbers(num1, num2, num3);
	let numbersGreaterHundred = getAmountNumbersGreaterHundred(num1, num2, num3);

	result = `<p>Кількість парних чисел: ${evenNumbers} <br>
	Кількість додатних чисел: ${positiveNumbers} <br>
	Кількість більших за 100: ${numbersGreaterHundred}</p>`;

	return result;
}

let a =  -26, b =  200, c =  55;

document.write(`<p>Дано три числа: ${a}, ${b}, ${c} </p>`);

document.write(getCalculateMultipleResults(a, b, c));