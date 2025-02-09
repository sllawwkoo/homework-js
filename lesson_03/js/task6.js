// Задача 6.
//З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

//  Позначення
// dayNumber - номер дня тижня
// dayName - назва дня тижня

if (confirm("Почати тестування?")) {
	// Введення необхідних данних
	const dayNumber = parseInt(prompt("Введіть номер дня тижня", "1"));
	let dayName;

	// Обчислення результатів

	switch (dayNumber) {
		case 1:
			dayName = "Понеділок";
			break;
		case 2:
			dayName = "Вівторок";
			break;
		case 3:
			dayName = "Середа";
			break;
		case 4:
			dayName = "Четвер";
			break;
		case 5:
			dayName = "П'ятниця";
			break;
		case 6:
			dayName = "Субота";
			break;
		case 7:
			dayName = "Неділя";
			break;
	}

	//Виведення результатів

	document.write(`
<p>Номер дня тижня - <strong>${dayNumber}</strong>.</p>
<p>Назва дня тижня - <strong>${dayName}</strong>.</p>
`);
}
