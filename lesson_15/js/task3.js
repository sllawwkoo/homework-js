// Задача 3.
//Розробити клас MultChecker для перевірки таблиці множення
// Поля	Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей
// Методи	Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render - виведення інформації про тестування на екран

function randomNumber(min, max) {
	return min + Math.floor(Math.random() * (max - min + 1));
}

class MultChecker {
	constructor(number) {
		this.number = number;
		this.rightAnswers = 0;
		this.wrongAnswers = 0;
	}

	getQuestion(min = 1, max = 10) {
		const secondNumber = randomNumber(min, max);
		return {
			question: `Скільки буде ${this.number} x ${secondNumber} ?`,
			answer: this.number * secondNumber,
		};
	}

	checkAnswer(userAnswer ,answer) {
		if (userAnswer === answer) {
			this.rightAnswers += 1;
			alert("Відповідь вірна! Молодець!");
		} else {
			this.wrongAnswers += 1;
			alert(`Відповідь невірна! Правильна відповідь: ${answer}`);
		}
	}

	generateTask(times) {
		for (let i = 0; i < times; i++) {
			const {question, answer }= this.getQuestion();
			const userAnswer = parseInt(prompt(question) ?? "0");
			this.checkAnswer(userAnswer, answer);
		}

		this.render();
	}

	render() {
		document.write(`
		<p>📊 Кількість питань: ${this.rightAnswers + this.wrongAnswers}</p>
		<p>✅ Кількість правильних відповідей: ${this.rightAnswers}</p>
		<p>❌ Кількість неправильних відповідей: ${this.wrongAnswers}</p>
		`);
	}
}

if (confirm('Почати тестування?')) {
	const multChecker = new MultChecker(7);
	multChecker.generateTask(5);
}