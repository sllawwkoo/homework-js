// Задача 1.
// Дано масив, який містить оцінки з К предметів.
// Знайти середній бал і з’ясувати до якої категорії
// він відноситься (відмінник, двійочник (має хоча би одну двійку),
// хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

if (confirm("Почати тестування?")) {
	//Отриуємо рандомний масив з оцінками в діапазоні від 2 до 5.
	function getArrRandomNumbers(amountNum) {
		let arr = [];
		for (let i = 0; i < amountNum; i++) {
			arr.push(2 + Math.floor(Math.random() * 4));
		}
		return arr;
	}

	//Щтримаємо середній бал з масиву оцінок getArrRandomNumbers.
	function getAverageScore(arr) {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return (sum / arr.length).toFixed(1);
	}

	//Отримаємо до якої категорії відноситься учень.

	function getScoreCategory(arr) {
		let minScore = arr[0];

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < minScore) minScore = arr[i];
		}

		let category;

		switch (minScore) {
			case 5:
				category = "Відмінник";
				break;
			case 4:
				category = "Хорошист";
				break;
			case 3:
				category = "Трійочник";
				break;
			case 2:
				category = "Двійочник";
				break;
		}

		return category;
	}

	const userNumberSubjects = parseInt(prompt("Введіть кількість оцінок", "5"));
	const arrRandomNumbers = getArrRandomNumbers(userNumberSubjects);
	const averageScore = getAverageScore(arrRandomNumbers);
	const scoreCategory = getScoreCategory(arrRandomNumbers);

	document.write(`
<p> Кількість предметів - ${userNumberSubjects}</p>
<p>Масив оцінок - ${arrRandomNumbers}</p>
<p>Середній бал - ${averageScore}</p>
<p>До якої категорії відноситься учень - ${scoreCategory}</p>
`);
}
