"use strict";

// Задача 2.
// Створити об’єкт «Авто».
// Поля(властивості)
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів
// Методи (дії)	Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів

function Auto(brand, tankSize, currentFuel, seatCount, passengerCount) {
	this.brand = brand;
	this.tankSize = tankSize;
	this.currentFuel = currentFuel;
	this.seatCount = seatCount;
	this.passengerCount = passengerCount;
}

Auto.prototype.refueling = function (liters) {
	if (liters <= 0) throw new Error("Кількість літрів має бути більшою за 0!");
	if (liters + this.currentFuel > this.tankSize)
		throw new Error("Кількість літрів не може перевищувати розмір бака!");

	this.currentFuel += liters;

	return this;
};

Auto.prototype.showPassengers = function () {
	console.log(`Кількість пасажирів: ${this.passengerCount}`);

	return this;
};

Auto.prototype.addPassengers = function (count) {
	const freeSeats = this.seatCount - this.passengerCount;
	if (count <= 0) {
		throw new Error("Кількість пасажирів має бути більшою за 0.");
	} else if (count <= freeSeats) {
		this.passengerCount += count;
		console.log(
			`Додано ${count} пасажирів. Тепер у машині ${this.passengerCount}.`
		);
	} else {
		console.log(`Недостатньо місць. Вільно лише ${freeSeats}.`);
	}

	return this;
};

Auto.prototype.removePassengers = function (count) {
	if (count <= 0) {
		throw new Error("Кількість пасажирів має бути більшою за 0.");
	} else if (count <= this.passengerCount) {
		this.passengerCount -= count;
		console.log(
			`Висаджено ${count} пасажирів. Залишилось ${this.passengerCount}.`
		);
	} else {
		console.log(
			`У машині лише ${this.passengerCount} пасажирів. Неможливо висадити ${count}.`
		);
	}

	return this;
};

const car = new Auto("BMW", 60, 30, 5, 1);

car
	.refueling(10)
	.showPassengers()
	.addPassengers(3)
	.showPassengers()
	.removePassengers(2)
	.showPassengers();
