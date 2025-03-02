"use strict";

// Задача 3.
//Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

const listNames = [
	"Петро",
	"Іван",
	"Олександр",
	"Іван",
	"Олександр",
	"Іван",
	"Олена",
	"Сергій",
];

function getNameCount(arr) {
	let nameCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "Іван") {
			nameCount++;
		}
	}
	return nameCount;
}

document.write(`<p>Кількість імен "Іван": ${getNameCount(listNames)}</p>`);