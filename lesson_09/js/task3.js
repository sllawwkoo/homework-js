"use strict";

// Задача 3.
//Користувач вводить кількість елементів.
// Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.

if (confirm("Почати тестування?")) {
	const userNumber = parseInt(
		prompt("Введіть кількість елементів масиву, починаючи з 6", "15")
	);

	function createArray(length) {
		const arr = new Array(length).fill(1, 0, 5).fill(7, 5);
		return arr;
	}

	const newArr = createArray(userNumber);

	document.write(`
	<p>Кількість елементів масиву: <strong>${userNumber}</strong></p>
	<p>Масив: <strong>[${newArr}]</strong></p>`);
}
