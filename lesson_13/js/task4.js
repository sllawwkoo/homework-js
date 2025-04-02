"use strict";

// Задача 4.
// Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.

// const boys = ["Олександр", "Андрій", "Дмитро", "Іван"];
// const girls = ["Анна", "Олена", "Юлія", "Вікторія"];

const boys = ["Андрій", "Дмитро", "Іван"];
const girls = ["Олена", "Юлія", "Вікторія"];

// const boys = ["Олександр", "Андрій"];
// const girls = ["Анна", "Олена"];

function getDancePairs(boysArr, girlsArr, result) {
	for (const boy of boysArr) {
		for (const girl of girlsArr) {
			result.push(`<strong>${boy}</strong> танцює з <strong>${girl}</strong>`);
			getDancePairs(
				boysArr.filter((b) => b !== boy),
				girlsArr.filter((g) => g !== girl),
				result
			);
			result.pop();
		}
	}
	if (boysArr.length === 0) {
		console.log("result", result);
		document.write(`<p>${result}</p> <br>`);
	}
}

document.write(
	`<p>Дано: <br> Масив хлопців - [${boys}] <br> Масив дівчат - [${girls}]</p>`
);
document.write(`<p>Всі можливі комбінації для танців з хлопців і дівчат:</p>`);

getDancePairs(boys, girls, []);
