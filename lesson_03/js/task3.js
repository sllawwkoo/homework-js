"use strict";

// Задача 3.Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

// Позначення
// 	generatedNumber - випадкове число
// 	userFirstAnswer - відповідь користувача
// 	userSecondAnswer - відповідь користувача

if (confirm("Почати тестування?")) {
	// Введення необхідних данних
	const generatedNumber = 1 + Math.floor(Math.random() * 5);
	const userFirstAnswer = parseInt(
		prompt("Перша спроба. \nВведіть число від 1 до 5", "1")
	);

	// Обчислення та виведення результатів
	if (userFirstAnswer === generatedNumber)
		document.write(`
	<p>Вітаємо! Ви вгадали число! <br> Загадане число - <strong>${generatedNumber}</strong></p>
	`);
	else {
		const userSecondAnswer = parseInt(
			prompt(
				"Ви не вгадали число! \nОстання спроба. \nВведіть знову число від 1 до 5",
				"1"
			)
		);
		if (userSecondAnswer === generatedNumber)
			document.write(`
		<p>Вітаємо! Ви вгадали число! <br> Загадане число - <strong>${generatedNumber}</strong></p>
		`);
		else
			document.write(`
		<p>Нажаль, ви не вгадали число! <br> Загадане число - <strong>${generatedNumber}</strong></p>
		`);
	}
}
