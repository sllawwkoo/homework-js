"use strict";

// Задача 5.
// Відобразити трикутник за допомогою символів «о»
//   оооооооооооо
//   ооооооооооо
//    оооооооооо
//     ооооооооо
//     оооооооо
//         …
//        оо
//         о

const ROWS = 12; // кількість рядків

for (let row = ROWS; row >= 1; row--) {
	for (let column = 1; column <= ROWS; column++) {
		if (ROWS - row >= column) document.write(`<span>&nbsp;</span>`);
		else document.write(`<span>о</span>`);
	}
	document.write("<br>");
}

