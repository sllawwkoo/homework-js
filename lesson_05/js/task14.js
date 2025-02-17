// 14.
//  Каса. Користувачу повідомляють суму, яку йому треба сплатити.
// Користувач поступово вводить суму грошей до тих пір,
// поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).

if (confirm("Почати тестування?")) {
	const amountMoney = 500; // Сума, яку треба сплатити

	alert(`Ви повинні сплатити ${amountMoney} грн. за товар`); // Виведення повідомлення о кількості грошей яку треба сплатити

	let userSumMoney = 0; // Сума, яку сплачує користувач

	while (userSumMoney < amountMoney) {
		let userMoney = parseInt(
			prompt(
				`Вам залишилося внести ${
					amountMoney - userSumMoney
				} грн. \n Внесіть гроші за придбаний товар!`
			)
		);

		userSumMoney += userMoney;

		document.write(`<p>Ви внесли ${userMoney} грн.</p>`);
	}

	if (userSumMoney > amountMoney) {
		document.write(
			`<p>Ви сплатили більше ніж коштує товар а саме ${userSumMoney} грн. Ось Ваша решта ${
				userSumMoney - amountMoney
			} грн.</p>`
		);
	} else {
		document.write(
			`<p>Ви повністю розрахувалися за товар вартістю ${amountMoney} грн.</p>`
		);
	}
}
