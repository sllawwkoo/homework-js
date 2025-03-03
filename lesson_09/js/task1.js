// Задача 1.
// Користувач вводить кількість елементів.
// Створити масив, що складається з вказаної кількості елементів заповнених нулями.

if (confirm("Почати тестування?")) {
	const userNumber = parseInt(prompt("Введіть кількість елементів масиву", "10"));

	function createArray(length) {
		const arr = new Array(length).fill(0);
		return arr;
	}

	const newArr = createArray(userNumber);

	document.write(`
	<p>Кількість елементів масиву: <strong>${userNumber}</strong></p>
	<p>Масив: <strong>[${newArr}]</strong></p>`);
}
