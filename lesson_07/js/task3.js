"use strict";

// Задача 3.
//Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення. 



function getSum(num1, num2, num3, num4) {
	return num1 + num2 + num3 + num4;
}

function getProduct (num1, num2, num3, num4) {
	return num1 * num2 * num3 * num4;
}

function getArithmeticMean (num1, num2, num3, num4) {
	return (num1 + num2 + num3 + num4) / 4;
}

function getMinNumber (num1, num2, num3, num4) {
	return Math.min(num1, num2, num3, num4);
}

const a = 2,
	b = 3,
	c = 4,
	d = 5;

const sum = getSum(a, b, c, d);
const product = getProduct(a, b, c, d);
const arithmeticMean = getArithmeticMean(a, b, c, d);
const minNumber = getMinNumber(a, b, c, d);

document.write(`
		<p>Дано чотири числа a=${a}, b=${b}, c=${c}, d=${d}</p>
		<p>Сума чисел: ${sum}</p>
		<p>Добуток чисел: ${product}</p>
		<p>Середнє арифметичне чисел: ${arithmeticMean}</p>
		<p>Мінімальне значення: ${minNumber}</p>
	`)