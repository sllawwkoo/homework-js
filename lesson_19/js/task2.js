"use strict";

// Задача 2.
// Дано 5 елементів input.
// При введенні значення у якийсь із них необхідно автоматично заповнювати інші
// (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний),
// усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)

function updateSiblings(input) {
	const baseValue = parseInt(input.value);

	let current = input.parentElement.nextElementSibling;
	let nextValue = baseValue + 1;

	while (current) {
		current.lastElementChild.value = nextValue++;
		current = current.nextElementSibling;
	}

	current = input.parentElement.previousElementSibling;
	let prevValue = baseValue - 1;

	while (current) {
		current.lastElementChild.value = prevValue--;
		current = current.previousElementSibling;
	}
}


const inputList = document.querySelector(".input__list");

inputList.addEventListener("input", (event) => {
	if (event.target.tagName === "INPUT") {
		updateSiblings(event.target);
	}
});
