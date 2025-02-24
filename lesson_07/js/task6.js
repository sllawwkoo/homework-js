"use strict";

// Задача 6.
// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців 
// (таблиця заповнюється заданим фіксованим повідомленням).

function createTable(rows = 6, columns = 5, message = "Cell") {
	document.write(`<table>`);
	for (let row = 0; row < rows; row++) {
		document.write(`<tr>`);
		for (let col = 0; col < columns; col++) {
			document.write(`<td>${message}</td>`);
		}
		document.write(`</tr>`);
	}
	document.write(`</table>`);
}

createTable();

createTable(4, 6, "Hello");