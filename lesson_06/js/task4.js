"use strict";

// Задача 4.
// Відобразити трикутник за допомогою символів «о»
// оооооооооооо
// ооооооооооо
// оооооооооо
// ооооооооо
// оооооооо
// …
// оо
// о

for (let row = 12; row >= 1; row--) {
	for (let column = 1; column <= row; column++) {
		document.write(`<span>о</span>`);
	}
	document.write("<br>");
}
