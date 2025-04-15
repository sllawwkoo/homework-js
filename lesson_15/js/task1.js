// Задача 1.
// Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Тир
// Поля(властивості)	Масив, у якому зберігається поле з зайцями
// Методи (дії)	Метод пострілу (задається позиція пострілу)
// Виведення ігрового поля

function randomArray(arrayLength) {
	return Array.from({ length: arrayLength }, () =>
		Math.floor(Math.random() * 2)
	);
}

function ShootingField(size) {
	this.field = randomArray(size);
}

ShootingField.prototype.shoot = function (position) {
	if (position < 0 || position >= this.field.length)
		throw new Error("Постріл поза межами поля!");

	if (this.field[position] === 1) {
		this.field[position] = 0;
		console.log("Влучили!");
	} else console.log("Промазали.");

	return this;
};

ShootingField.prototype.showField = function () {
	const currentField = this.field
		.map((cell) => (cell === 1 ? "🐇" : "▫️"))
		.join(" ");

	console.log("Поле:");
	console.log(currentField);

	return this;
};


const shootingField = new ShootingField(10);
shootingField
	.showField()
	.shoot(3)
	.showField()
	.shoot(5)
	.showField();