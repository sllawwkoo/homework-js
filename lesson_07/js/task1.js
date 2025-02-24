// Задача 1.
// Створити функцію, яка за номером місяця повертає його назву.

if (confirm("Почати тестування?")) {
	const userNumMonth = parseInt(prompt("Введіть номер місяця", "7"));

	function getMonth(numberOfMonth) {
		let month;

		switch (numberOfMonth) {
			case 1:
				month = "Січень";
				break;
			case 2:
				month = "Лютий";
				break;
			case 3:
				month = "Березень";
				break;
			case 4:
				month = "Квітень";
				break;
			case 5:
				month = "Травень";
				break;
			case 6:
				month = "Червень";
				break;
			case 7:
				month = "Липень";
				break;
			case 8:
				month = "Серпень";
				break;
			case 9:
				month = "Вересень";
				break;
			case 10:
				month = "Жовтень";
				break;
			case 11:
				month = "Листопад";
				break;
			case 12:
				month = "Грудень";
				break;
			default:
				throw new Error("Номер місяця повинен бути від 1 до 12");
		}

		return month;
	}

	try {
		let month = getMonth(userNumMonth);
		document.write(`
		<p>Ви ввели номер місяця: <strong>${userNumMonth}</strong></p>
	<p>Поточний місяць: <strong>${month}</strong></p>`);
	} catch (error) {
		document.write(`<p>${error.message}</p>`);
	}
}
