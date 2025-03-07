"use strict";

// Задача 3.
// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000).
// Сформувати список з тих цін, які більші за попереднє значення

function getRandomArray(arrayLength, minValue = 1, maxValue = 10000) {
	return Array.from(
		{ length: arrayLength },
		() => minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	);
}

const baseArray = getRandomArray(10);

const newArray = baseArray.filter((el, i, arr) => el > arr[i - 1] && i > 0);

document.write(`
<p>Масив цін:[${baseArray}]</p>
<p>Новий масив: [${newArray}]</p>
`);
