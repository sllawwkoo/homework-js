"use strict";

// Задача 5.
// Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати),
// AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати).
// Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів.
// Приклад:
// testsList= [ {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
// {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7}, ]
// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач
// (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. Результати тестування додаються в об’єкт History.
// Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.

// Клас для опису одного тесту
class TestData {
	constructor(firstNum, secondNum, operation, userAnswer, correctAnswer) {
		this.firstNum = firstNum;
		this.secondNum = secondNum;
		this.operation = operation;
		this.userAnswer = userAnswer;
		this.correctAnswer = correctAnswer;
	}
}

// Клас для зберігання історії
class History {
	constructor() {
		this.testsList = [];
	}

	add(testData) {
		this.testsList.push(testData);
	}

	print() {
		console.log("🧾 Історія тестування:");
		this.testsList.forEach((test, i) => {
			console.log(
				`${i + 1}) ${test.firstNum} ${test.operation} ${test.secondNum} = ${
					test.userAnswer
				} (Правильна відповідь: ${test.correctAnswer})`
			);
		});
	}
}

// Клас для множення
class MultChecker {
	constructor(history) {
		this.history = history;
	}

	run() {
		const a = Math.floor(Math.random() * 10);
		const b = Math.floor(Math.random() * 10);
		const correct = a * b;
		const user = parseInt(prompt(`❓ Скільки буде: ${a} * ${b} = ?`));

		const result = new TestData(a, b, "*", user, correct);
		this.history.add(result);
	}
}

// Клас для додавання
class AddChecker {
	constructor(history, min = 1, max = 100) {
		this.history = history;
		this.min = min;
		this.max = max;
	}

	run() {
		const a = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
		const b = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
		const correct = a + b;
		const user = parseInt(prompt(`❓ Скільки буде: ${a} + ${b} = ?`));

		const result = new TestData(a, b, "+", user, correct);
		this.history.add(result);
	}
}

class TestManager {
	static #instance = null;

	constructor(n) {
		if (TestManager.#instance) return TestManager.#instance;

		this.taskCount = n;
		this.currentCount = 0;
		this.history = new History();

		this.multChecker = new MultChecker(this.history);
		this.addChecker = new AddChecker(this.history);

		TestManager.#instance = this;
	}

	start() {
		const intervalId = setInterval(() => {
			if (this.currentCount >= this.taskCount) {
				clearInterval(intervalId);
				this.history.print();
				return;
			}

			const rand = Math.random() < 0.5 ? "add" : "mult";

			if (rand === "add") {
				this.addChecker.run();
			} else {
				this.multChecker.run();
			}

			this.currentCount++;
		}, 1000); // 1 секунда між задачами
	}
}

if (confirm("Почати тестування?")) {
	const manager = new TestManager(5); // Задаємо кількість питань
	manager.start();
}
