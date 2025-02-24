"use strict";

// Задача 11.
// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

if (confirm("Почати тестування?")) {
	const userNumMonth = parseInt(prompt("Введіть номер місяця", "7"));

	function getSeason(month) {
		let season;

		switch (month) {
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
				throw new Error("Номер місяця повинен бути від 1 до 12");
		}

		return season;
	}

	try {
		let result = getSeason(userNumMonth);
		document.write(`
		<p>Ви ввели номер місяця: <strong>${userNumMonth}</strong></p>
	<p>Пора року: <strong>${result}</strong></p>`);
	} catch (error) {
		document.write(`<p>${error.message}</p>`);
	}
}
