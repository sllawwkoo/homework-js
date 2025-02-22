"use strict";

// Задача 11.
// Вивести на екран 
// 1 1
// 2 1 2
// 3 1 2 3
// 4 1 2 3 4
// …
// i 1 2 3 ..i
// 23 1 2 3 .. 22 23

for (let i = 1; i <= 23; i++) {
	document.write(`<span>${i} </span>`);
	for (let j = 1; j <= i; j++) {
		document.write(`<span>${j} </span>`);
	}
	document.write("<br>");
}
