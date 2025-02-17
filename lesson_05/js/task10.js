// Задача 10.
// Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.

if (confirm("Почати тестування?")) {
	let sum = 0;

	startNumber = parseInt(prompt("Введіть початкове число", "1"));
	endNumber = parseInt(prompt("Введіть кінцеве число", "10"));

	if (startNumber > endNumber) {
		let temp = startNumber;
		startNumber = endNumber;
		endNumber = temp;
	}

	for (let i = startNumber; i <= endNumber; i++) {
		if (i === startNumber) continue;
		if (i === endNumber) break;

		if (i % 2 !== 0) {
			sum += i;
			document.write(`
		<p>Непарне число - ${i}</p> <br>
		`);
		}
	}

	document.write(`
<p>Сума всіх непарних чисел, що знаходяться між заданими користувачем числами в проміжку між ${startNumber} та ${endNumber} -  дорівнює <strong>${sum}</strong></p>
`);
}
