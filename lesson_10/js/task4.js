"use strict";

// Задача 4.
// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000).
// Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

function getRandomArray(arrayLength, minValue = 1, maxValue = 10000) {
	return Array.from(
		{ length: arrayLength },
		() => minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	);
}

const baseArray = getRandomArray(10);

const maxValue = Math.max(...baseArray);

const newArray = baseArray.map(
	(el) => ((el / maxValue) * 100).toFixed(2) + "%"
);

document.write(`
<p>Масив цін:[${baseArray}]</p>
<p>Максимальне значення: ${maxValue}</p>
<p>Новий масив: [${newArray}]</p>
`);
