"use strict";

// Задача 3.
// Виведіть всі можливі наступні комбінації ходів користувачів у грі“Хрестики-нулики”,
// починаючи з деякої заданої ситуації (тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято,
// і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок (де пробіли).
// Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.

const arr = [
	["", "", ""],
	["0", "", "x"],
	["x", "0", ""],
];

function displayTable(array) {
	document.write('<table border="1" style="border-collapse: collapse;">');

	for (let i = 0; i < array.length; i++) {
		document.write("<tr>");
		for (let j = 0; j < array[i].length; j++) {
			document.write(
				`<td style="padding: 8px; text-align: center;">${array[i][j]}</td>`
			);
		}
		document.write("</tr>");
	}

	document.write("</table>");
}

function getStatistics(arr) {
	const emptyCells = [];
	let num_x = 0;
	let num_0 = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			switch (arr[i][j]) {
				case "":
					emptyCells.push([i, j]);
					arr[i][j] = 0;
					break;
				case "0":
					num_0++;
					break;
				case "x":
					num_x++;
					break;
			}
		}
	}
	return { emptyCells, num_x, num_0 };
}

function next(arr, emptyCells, emptyIndex, left_x) {
	if (left_x > 0) {
		for (let ind = emptyIndex; ind < emptyCells.length - (left_x - 1); ind++) {
			const [i, j] = emptyCells[ind];
			arr[i][j] = "x";

			next(arr, emptyCells, ind + 1, left_x - 1);

			arr[i][j] = "0";
		}
	} else {
		displayTable(arr);
		document.write("<hr>");
	}
}

const { emptyCells, num_x, num_0 } = getStatistics(arr);
const left_x = 5 - num_x;
const left_0 = 4 - num_0;

console.log(emptyCells);
console.log(left_x);
console.log(left_0);

next(arr, emptyCells, 0, left_x);
