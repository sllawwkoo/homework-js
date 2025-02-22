"use strict";

// Задача 6.
// Побудувати ялинку
// о
// оо
// ооо
// оооо
// ооооо
// о
// оо
// ооо
// оооо
// ооооо
// о
// оо
// ооо
// оооо
// ооооо

for (let i = 1; i <= 3; i++) {
	for(let j = 1; j <= 5; j++) {
		for (let k = 1; k <= j; k++) {
			document.write(`<span>о</span>`);
		}
		document.write("<br>");
	}
}
