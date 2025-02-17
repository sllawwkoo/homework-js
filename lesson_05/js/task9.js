// Задача 9.
// Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).

if (confirm("Почати тестування?")) {
	const userNumber = parseInt(prompt("Загадаєте число від 1 і більше", "10"));

	let numberOfAttempts = 0; // кількість спроб

	document.write(
		`<p>Користувач загадав число - <strong>${userNumber}</strong></p>`
	);

	while (true) {
		const computerNumber = 1 + Math.floor(Math.random() * userNumber);
		numberOfAttempts++;

		let computerResponse = confirm(
			`Спроба№${numberOfAttempts}.\n Комп’ютер назвав число ${computerNumber}. \n Вгадав чи ні?`
		);

		if (computerResponse && computerNumber === userNumber) {
			alert(
				`Вітаємо! \n Комп’ютер вгадав загадане вами число - ${userNumber} з ${numberOfAttempts} спроби!`
			);
			document.write(
				`<p>Вітаємо! Комп’ютер вгадав загадане вами число <strong>${userNumber}</strong> з ${numberOfAttempts} спроби!</p>`
			);
			break;
		} else if (!computerResponse && computerNumber === userNumber) {
			alert(
				`Ви мабуть забули свое число? \n Комп’ютер все ж таки вгадав загадане вами число - ${userNumber} з ${numberOfAttempts} спроби!`
			);
			document.write(
				`<p>Вітаємо! Комп’ютер вгадав загадане вами число <strong>${userNumber}</strong> з ${numberOfAttempts} спроби!</p>`
			);
			break;
		} else {
			alert(
				`Нажаль, ${numberOfAttempts} спроба не вдала - вкомп’ютер не вгадав число!`
			);
		}
	}
}
