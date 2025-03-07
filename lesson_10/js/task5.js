"use strict";

// Задача 5.
// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000).
// Підрахувати кількість змін цін

function getRandomArray(arrayLength, minValue = 1, maxValue = 10000) {
	return Array.from(
		{ length: arrayLength },
		() => minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	);
}

const baseArray = getRandomArray(10);

const changePriceCount = baseArray.reduce(
	(count, el, index, arr) => (el !== arr[index - 1] && index > 0  ? count + 1 : count),
	0
);

document.write(`
<p>Масив цін:[${baseArray}]</p>
<p>Ціна змінилась: ${changePriceCount} раз</p>
`);
