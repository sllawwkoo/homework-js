"use strict";

// Задача 5.
// Вивести таблицю.

let cellNumber = 0; // номер клітинки

document.write(`<table>`);

for (let i = 0; i < 3; i++) {
	document.write(`<tr>`);
	for (let j = 0; j < 3; j++) {
		cellNumber++;
		document.write(`<td>${cellNumber}</td>`);
	}
	document.write(`</tr>`);
}

document.write(`</table>`);
