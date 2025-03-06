"use strict";

// Задача 6.
// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000).
// Визначити, чи є ціна, що менше 1000

function getRandomArray(arrayLength, minValue = 1, maxValue = 10000) {
	return Array.from(
		{ length: arrayLength },
		() => minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	);
}

const baseArray = getRandomArray(10);

const isPriceBelow1000 = baseArray.some((el) => el < 1000);

document.write(`
<p>Масив цін:[${baseArray}]</p>
<p>Чи є ціна, що менше 1000: ${isPriceBelow1000}</p>
`);
