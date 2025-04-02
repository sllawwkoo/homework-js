"use strict";

// Задача 6.
// З використанням замикань розробити ітератор,
// тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова.
// З використанням нього розробити гру «Прекладач».
// Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.

if (confirm("Почати тестування?")) {
	function createLetterIterator(word) {
		let index = 0;

		function getNextIteration() {
			if (index > word.length) return;
			return word[index++];
		}
		return getNextIteration;
	}

	function runTranslateGame (word, description) {
		const getLetter = createLetterIterator(word);
		let countCorrectAnswers = 0;
		alert(description);

		for (let i = 1; i <= word.length; i++) {
			const userAnswer = prompt(
				`Введіть ${i} букву на англійській цього слова`
			);

			if (userAnswer.toLowerCase() === getLetter()) countCorrectAnswers++;
		}

		return countCorrectAnswers;
	};

	const res = runTranslateGame("house", "Будівля, де живуть люди");
	alert(`Ви вгадали ${res} літер`);
}
