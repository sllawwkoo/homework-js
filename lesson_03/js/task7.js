// Задача 7.
// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься.

// Позначення
// 	monthNumber - номер місяця
// season - пора року

if (confirm("Почати тестування?")) {
	// Введення необхідних данних

	const monthNumber = parseInt(prompt("Введіть номер місяця", "3"));

	let season;

	// Обчислення результатів
	switch (monthNumber) {
		case 12:
		case 1:
		case 2:
			season = "Зима";
			break;

		case 3:
		case 4:
		case 5:
			season = "Весна";
			break;

		case 6:
		case 7:
		case 8:
			season = "Літо";
			break;

		case 9:
		case 10:
		case 11:
			season = "Осінь";
			break;

		default:
			break;
	}

	// Виведення результатів
	document.write(`
<p>Місяць - ${monthNumber}.</p>
<p>Пора року - ${season}.</p>
`);
}
