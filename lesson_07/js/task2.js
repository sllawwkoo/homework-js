// Задача 2.
// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

if (confirm("Почати тестування?")) {
	const userNumDay = parseInt(prompt("Введіть номер дня", "3"));

	function isWorkingDay(numDay) {
		return numDay >= 1 && numDay <= 5;
	}

	if (isWorkingDay(userNumDay)) {
		document.write(`<p>Цей день робочий</p>`);
	} else {
		document.write(`<p>Цей день не робочий</p>`);
	}
}
