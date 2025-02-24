"use strict";

// Задача 5.
// Створити окремі функції, які переводять:
// 1)	Сантиметри у дюйми;
// 2)	Кілограми у фунти;
// 3)	Кілометри у милі.

function convertCentimetersToInches(cmNum) {
	const INCH_TO_CM = 2.54;

	return (cmNum / INCH_TO_CM).toFixed(4);
}

function convertKilogramsToPounds(kgNum) {
	const POUND_TO_KG = 0.4536;

	return (kgNum / POUND_TO_KG).toFixed(4);
}

function convertKilometersToMiles(kmNum) {
	const MILE_TO_KM = 1.6093;

	return (kmNum / MILE_TO_KM).toFixed(4);
}

const num1 = 20

document.write(`
<p>${num1} см = ${convertCentimetersToInches(num1)} дюйма</p>
`)

const num2 = 100

document.write(`
<p>${num2} кг = ${convertKilogramsToPounds(num2)} фунтів</p>
`)

const num3 = 1000

document.write(`
<p>${num3} км = ${convertKilometersToMiles(num3)} миль</p>
`)
