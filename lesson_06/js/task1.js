// Задача 1.
// Вивести на екран
// A B C D E 
// B C D E F 
// C D E F G 
// D E F G H 
// E F G H I

const minCode = "A".charCodeAt(0); // 65 - код символу "A"

for(let i = 0; i < 5; i++) {
	for(let j = 0; j < 5; j++) {
		let newCharacter = minCode + i + j;
		document.write(`<span>${String.fromCharCode(newCharacter)}</span> `);
	}
	document.write("<br>");
}
