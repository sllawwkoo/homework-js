"use strict";

// Задача 8.
// Дано одновимірний масив, у якому зберігається певна виграшна сума
// (елементи заповнюються випадковим чином значеннями від -500 до 500).
// Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.

if (confirm("Почати тестування?")) {
	function getArrayNumbers(arrLenght, minNum, maxNum) {
		const arr = [];

		for (let i = 0; i < arrLenght; i++) {
			arr.push(Math.floor(Math.random() * (maxNum - minNum + 1) + minNum));
		}

		return arr;
	}

	const arrLenght = 10;
	const arrRandom = getArrayNumbers(arrLenght, -500, 500);
	console.log("arrRandom", arrRandom);

	function getTotalPrize(arr) {
		let totalPrize = 0;
		let userNumber;

		do {
			userNumber = parseInt(
				prompt(`Введіть номер елемента від 1 до ${arrLenght}`, "1")
			);

			if (userNumber && userNumber <= arrLenght) {
				totalPrize += arr[userNumber - 1];
				if (arr[userNumber - 1] > 0)
					alert(
						`Ви відкрили виграшну комірку \n Ваш виграш збільшився на ${
							arr[userNumber - 1]
						}`
					);
				else
					alert(
						`Нажаль, ви не відкрили виграшну комірку \n Ваш виграш зменшився на ${
							arr[userNumber - 1]
						}`
					);
			}
		} while (userNumber);

		return totalPrize;
	}

	const totalPrize = getTotalPrize(arrRandom);

	if (totalPrize > 0) {
		document.write(
			`<p>Ваш загальний виграш: <strong>${totalPrize}</strong> грн.</p>`
		);
	} else {
		document.write(
			`<p>Нажаль, ви не виграли нічого. Сума відкритих комірок: ${totalPrize}</p>`
		);
	}
}
