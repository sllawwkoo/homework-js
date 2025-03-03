"use strict";

// Задача 8.
// Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А».

const carNumbers = [
	"AA4536VC",
	"DC4F",
	"AB12C",
	"AA123BA",
	"CA12345",
	"DA12345CD",
	"AA1234CA",
	"BB1234CA",
];

document.write(`<p>Дано масив номерів авто: [${carNumbers}]</p>`);

const newCarNumbers = carNumbers.filter((el) => el[0] === "A");

document.write(`<p>Новий масив: [${newCarNumbers}]</p>`);

