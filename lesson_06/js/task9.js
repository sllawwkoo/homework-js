// Задача 9.
// Інвестор вклав  S тис. грн на 20 років під 20% річних,
// а потім на 17 років під 27% річних.
// Визначити за допомогою циклів суму, яку він одержить.

if (confirm("Почати тестування?")) {
	const startCapital = parseInt(prompt("Введіть початковий капітал", "1000")); //початковий капітал
	const interestRate1 = 0.2; //річний процент
	const years1 = 20; //кількість років
	const interestRate2 = 0.27; //річний процент
	const years2 = 17; //кількість років

	let annualInterestIncome1 = startCapital * interestRate1; //річні доходи під 20%
	let totalInterestIncome1 = 0; // загальний дохід
	let annualInterestIncome2 = startCapital * interestRate2; //річні доходи  під 27%
	let totalInterestIncome2 = 0; // загальний дохід

	document.write(`
	<p>Початковий капітал - ${startCapital} грн.</p>
	<p>Річний процент - ${interestRate1 * 100}%</p>
	<p>Кількість років - ${years1}</p>
	<p>Річний процент - ${interestRate2 * 100}%</p>
	<p>Кількість років - ${years2}</p>
	`);

	for (let i = 0; i < years1; i++) {
		totalInterestIncome1 += annualInterestIncome1;
	}

	for (let i = 0; i < years2; i++) {
		totalInterestIncome2 += annualInterestIncome2;
	}

	document.write(`
	<p>Через ${years1 + years2} років інвестор отримає - ${
		startCapital + totalInterestIncome1 + totalInterestIncome2
	} грн.</p>
	`);
}
