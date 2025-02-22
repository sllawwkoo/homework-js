"use strict";

// Задача 8.
// Інвестор вклав  S  тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку.
// Визначити за допомогою циклів суму, яку він одержить.

if (confirm("Почати тестування?")) {
	const startCapital = parseInt(prompt("Введіть початковий капітал", "1000")); //початковий капітал
	const interestRate = 0.2; //річний процент
	const years = 20; //кількість років
	const tax = 0.05;

	let annualInterestIncome =
		startCapital * interestRate - startCapital * interestRate * tax; //річні доходи
	let totalInterestIncome = 0; // загальний дохід

	document.write(`
<p>Початковий капітал - ${startCapital} грн.</p>
<p>Річний процент - ${interestRate * 100}%</p>
<p>Податок - ${tax * 100}%</p>
<p>Кількість років - ${years}</p>
`);

	for (let i = 0; i < years; i++) {
		totalInterestIncome += annualInterestIncome;
	}

	document.write(`
<p>Через ${years} років інвестор отримає - ${
		startCapital + totalInterestIncome
	} грн.</p>
`);
}
