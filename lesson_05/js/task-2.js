//Задача -2.
// Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
//evenNumber  - парні числа
//oddNumber  - непарні числа

let evenNumber = 0;
let oddNumber = 0;

for (let i = 0; i < 100; i++) {
	let renderNumber = 1 + Math.floor(Math.random() * 1000);
	if (renderNumber % 2 === 0) {
		evenNumber++;
	}
}

oddNumber = 100 - evenNumber;

document.write(`
<p>Кількість парних чисел - ${evenNumber}</p>
<p>Кількість непарних чисел - ${oddNumber}</p>
`);

if (evenNumber > oddNumber)
	document.write(`<p>Парних чисел більше на ${evenNumber - oddNumber}!</p>`);
else document.write(`<p>Непарних чисел більше на ${oddNumber - evenNumber}!</p>`);
