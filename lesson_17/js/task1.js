// Задача 1.
// Створити клас, що дозволяє виконувати такі операції над масивами:
// знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи).

class ArrayAnalyzer {
	static countPositive(arr) {
		return arr.reduce((count, num) => (num > 0 ? count + 1 : count), 0);
	}

	static countNegative(arr) {
		return arr.reduce((count, num) => (num < 0 ? count + 1 : count), 0);
	}

	static countOccurrences(arr, target) {
		return arr.reduce((count, num) => (num === target ? count + 1 : count), 0);
	}
}

const arrNumbers =[1, 2 ,45, -5, 11, 6, -15, 26, 2, -8, -26, 1, 9, 1]

console.log(ArrayAnalyzer.countPositive(arrNumbers));
console.log(ArrayAnalyzer.countNegative(arrNumbers));
console.log(ArrayAnalyzer.countOccurrences(arrNumbers, 1));
