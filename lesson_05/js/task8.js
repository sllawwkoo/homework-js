"use strict";

// Задача 8.
// Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).

if (confirm("Почати тестування?")) {
	const userNumber = parseInt(prompt("Загадаєте число від 1 і більше", "10"));

	document.write(
		`<p>Користувач загадав число - <strong>${userNumber}</strong></p>`
	);

	for (let i = 1; i <= 3; i++) {
		const computerNumber = 1 + Math.floor(Math.random() * userNumber);

		document.write(
			`<p>Спроба№${i}. Комп’ютер назвав число <strong>${computerNumber}</strong></p>`
		);

		if (userNumber === computerNumber) {
			alert(
				`Вітаємо! \n Комп’ютер вгадав загадане вами число - ${userNumber} з ${i} спроби!`
			);
			document.write(
				`<p>Вітаємо! Комп’ютер вгадав загадане вами число <strong>${userNumber}</strong> з ${i} спроби!</p>`
			);
			break;
		} else {
			alert(`Нажаль, ${i} спроба не вдала - вкомп’ютер не вгадав число!`);
		}
	}
}
