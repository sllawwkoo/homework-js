// Задача 7.
// Тренажер додавання. 
// Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.

function generateNumber(min, max) {
	return min + Math.floor(Math.random() * (max - min + 1));
}

function getQuestion() {
	const num1 = generateNumber(1, 9);
	const num2 = generateNumber(1, 9);
	const correctAnswer = num1 + num2;
	const userAnswer = prompt(`Скільки буде ${num1} + ${num2}?`);

	if (userAnswer === null) {
		alert("Ви скасували тренування.");
		return null;
	}

	if (parseInt(userAnswer) === correctAnswer) {
		alert("Відповідь вірна! Молодець!");
	} else {
		alert(`Відповідь невірна.\nПравильна відповідь: ${correctAnswer}`);
	}
}

function runAdditionSimulator() {
	if (getQuestion() === null) return;

	setTimeout(runAdditionSimulator, 10000);
}

if (confirm("Почати тестування?")) {
	runAdditionSimulator();
}