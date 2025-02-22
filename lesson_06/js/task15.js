// Задача 15.
// Написати програму виведення на екран кожного символу латинського алфавіту 
// та поруч з кожним з них символу, що передує йому та що слідує за ним.


const minCode = "A".charCodeAt(0); // 65 - код символу "A"
const maxCode = "Z".charCodeAt(0); // 90 - код символу "Z"
const LETTERS_COUNT = 26 // кількість латинських символів


for (let letter = minCode; letter <= maxCode; letter++) {
	let prevCharacter = String.fromCharCode(
		((letter - minCode - 1 + LETTERS_COUNT) % LETTERS_COUNT) + minCode
	);
	let currentCharacter = String.fromCharCode(letter);
	let nextCharacter = String.fromCharCode(
		((letter - minCode + 1 + LETTERS_COUNT) % LETTERS_COUNT) + minCode
	);
	document.write(`<div style="display: flex; gap: 10px"> `);
	document.write(`<span>${prevCharacter}</span> `);
	document.write(`<span><strong>${currentCharacter}</strong></span> `);
	document.write(`<span>${nextCharacter}</span> `);
	document.write(`</div> `);
	document.write("<br>");
}