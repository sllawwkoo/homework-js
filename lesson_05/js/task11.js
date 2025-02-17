"use strict";

// Задача 11.
//  Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.

if (confirm("Почати тестування?")) {
	const startNumber = parseInt(prompt("Введіть початкове число", "1"));
	const endNumber = parseInt(prompt("Введіть кінцеве число", "20"));

	let sum = 0,
		oddNumber = 0;

	for (let i = startNumber; i <= endNumber && oddNumber < 5; i++) {
		if (i === startNumber) continue;
		if (i === endNumber) break;

		if (i % 2 !== 0) {
			sum += i;
			oddNumber++;
			document.write(`
		<p>Непарне число№${oddNumber} - ${i}</p> <br>
		`);
		}
	}

	document.write(`
<p>Сума перших 5 непарних чисел, що знаходяться між заданими користувачем числами в проміжку між ${startNumber} та ${endNumber} -  дорівнює <strong>${sum}</strong></p>
`);
}
