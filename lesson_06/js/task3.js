"use strict";

// Задача 3.
// Відобразити трикутник за допомогою символів «о»

//       о;
//      оо;
//     ооо;
// 	   оооо;
// 	  ооооо;
//   оооооо;
//   ооооооо;

const ROWS = 7; // кількість рядків

for (let row = 1; row <= ROWS; row++) {
	for (let column = 1; column <= ROWS; column++) {
		if (ROWS - row >= column) document.write(`<span>&nbsp;</span>`);
		else document.write(`<span>о</span>`);
	}
	document.write("<br>");
}
