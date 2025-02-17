"use strict";

// Задача 4.
// Вивести таблицю з 3 рядками і 7 стовпцями.


document.write(`<table>`);

for (let i = 0; i < 3; i++) {
	document.write(`<tr>`);
	for (let j = 1; j <=7; j++) {
		document.write(`<td>${j}</td>`);
	}
	document.write(`</tr>`);
}

document.write(`</table>`);
