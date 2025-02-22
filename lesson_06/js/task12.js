// Задача 12. 
// Вивести на екран 
// 1 1
// 2 1234
// 3 123456789
// 4 1234…16
// 5 1 … 25
// 6 1…36

for (let i = 1; i <= 6; i++) {
	document.write(`<span>${i} </span>`);
	for (let j = 1; j <= i*i; j++) {
		document.write(`<span>${j} </span>`);
	}
	document.write("<br>");
}