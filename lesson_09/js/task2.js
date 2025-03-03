// Задача 2.
// Користувач вводить кількість елементів. 
// Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

if (confirm("Почати тестування?")) {
	const userNumber = parseInt(
		prompt("Введіть кількість елементів масиву", "10")
	);

	function createArray(length) {
		const endIndex = Math.floor(length / 2);

		const arr = new Array(length).fill(1).fill(7, endIndex);
		return arr;
	}

	const newArr = createArray(userNumber);

	document.write(`
	<p>Кількість елементів масиву: <strong>${userNumber}</strong></p>
	<p>Масив: <strong>[${newArr}]</strong></p>`);
}
