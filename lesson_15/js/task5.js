// Задача 5.
// Розробити клас «Керівник танців»
// Поля	Масив імен хлопців
// Масив імен дівчат
// Методи	Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

const boys = ["Андрій", "Іван", "Максим", "Данило"];
const girls = ["Оля", "Катя", "Ірина", "Марія"];

class DancePairs {
	constructor(arrBoys, arrGirls) {
		this.arrBoys = arrBoys;
		this.arrGirls = arrGirls;
	}

	getRandomBoy() {
		return this.arrBoys[Math.floor(Math.random() * this.arrBoys.length)];
	}

	getRandomGirl() {
		return this.arrGirls[Math.floor(Math.random() * this.arrGirls.length)];
	}

	showPair() {
		const boy = this.getRandomBoy();
		const girl = this.getRandomGirl();

		return document.write(`<p>Танцює пара ${boy} та ${girl}</p> <br>`);
	}
	run() {
		this.showPair();
		this.intervalId = setInterval(() => this.showPair(), 5000);
	}

	stop() {
		clearInterval(this.intervalId);
		console.log("Показ зупинено!");
	}
}

if (confirm("Почати тестування?")) {
	const dance = new DancePairs(boys, girls);
	dance.run();
}
