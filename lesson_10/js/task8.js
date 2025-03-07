"use strict";

// Задача 8.
// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000).
// Підрахувати кількість цін, що більше за 1000

function getRandomArray(arrayLength, minValue = 1, maxValue = 10000) {
	return Array.from(
		{ length: arrayLength },
		() => minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	);
}

const baseArray = getRandomArray(10);

// const countPricesAbove1000 = arr2.filter((el) => el > 1000).length;

const countPricesAbove1000 = baseArray.reduce(
	(count, el) => (el > 1000 ? count + 1 : count),
	0
);

document.write(`
<p>Масив цін:[${baseArray}]</p>
<p>Кількість цін що більше за 1000: ${countPricesAbove1000}</p>
`);
