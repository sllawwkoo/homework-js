// Задача 3.
//Створити генератор,
// який би випадковим чином поступово генерував вказану кількість парних чисел.

function getRandomEvenNumber(min = 0, max = 100) {
	let number = Math.floor(Math.random() * (max - min + 1)) + min;

	if (number % 2 !== 0) number++;

	if (number > max) number -= 2;

	return number;
}

function* evenNumberGenerator(count, min = 0, max = 100) {
	let generated = 0;
	while (generated < count) {
		yield getRandomEvenNumber(min, max);
		generated++;
	}
}

const generator = evenNumberGenerator(10, 10, 150);

const wrapper = document.querySelector(".result-wrapper");

for (const num of generator) {
	const createdElement = document.createElement("p");
	createdElement.textContent = num;
	wrapper.appendChild(createdElement);
}