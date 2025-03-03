"use strict";

// Задача 6.
// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2.

const arrNumbers = [5, 2, 3, 6, 5, 7, 2, 8, 10];

document.write(`<p>Дано масив елементів: [${arrNumbers}]</p>`);

arrNumbers.forEach((el, index, arr) => {
	if (el > arr[0]) arr[index] *= 2;
});

document.write(`<p>Змінений масив: [${arrNumbers}]</p>`);
