// Задача 0.
// Дано два об’єкта.
// Обидва містять масив цілих чисел.
// При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих,
// які знаходяться між заданими мінімальним і максимальних значенням.
//Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

const obj1 = {
	arr: [1, 2, 3, 4, 5],
	getSum() {
		let sum = 0;
		for (let i = 0; i < this.arr.length; i++) {
			sum += this.arr[i];
		}
		return sum;
	},
};

const obj2 = {
	arr: [6, 7, 8, 9, 10],
	getProductInRange(min, max) {
		return this.arr.reduce(
			(product, number) =>
				number >= min && number <= max ? product * number : product,
			1
		);
	},
};

console.log("сума чисел obj1: ", obj1.getSum());
console.log("сума чисел obj2: ", obj1.getSum.apply(obj2));

console.log("добуток чисел obj2: ", obj2.getProductInRange(8, 12));
console.log("добуток чисел obj1: ", obj2.getProductInRange.call(obj1, 3, 6));
