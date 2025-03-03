"use strict";

// Задача 4.
//Дано масив елементів. Вивести на екран елементи, що більші за 100.

const arrNumbers = [20, 3, 101, 100, 86, 226, 80, 160, 305, 13];

document.write(`<p>Дано масив елементів: [${arrNumbers}]</p>`);

document.write(`<p>Вивести на екран елементи, що більші за 100:</p><p>`);

for (let nam of arrNumbers) {
	if (nam > 100) {
		document.write(`<span>${nam}</span>, `);
	}
}

document.write(`</p>`);
