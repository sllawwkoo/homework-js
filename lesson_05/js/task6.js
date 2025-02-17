"use strict";

// Задача 6.
// Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком.

let cellNumber = 0; // номер клітинки

document.write(`<div class="table-wrapper">`);

for (let tb = 0; tb < 3; tb++) {
	document.write(`<table>`);
	for (let row = 0; row < 3; row++) {
		document.write(`<tr>`);
		for (let cell = 0; cell < 3; cell++) {
			cellNumber++;
			document.write(`<td>${cellNumber}</td>`);
		}
		document.write(`</tr>`);
	}
	document.write(`</table>`);
}

document.write(`</div>`);
