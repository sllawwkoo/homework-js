// Задача 1.
// Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)

const arrNumbers = [
	[1, 1, 1, 1],
	[2, 2, 2, 2],
	[3, 3, 3, 3],
	[4, 4, 4, 4],
];

document.write(`<p>Дано масив: ${JSON.stringify(arrNumbers)}</p>`);

const halfRow = Math.floor(arrNumbers.length / 2);
const halfCol = Math.floor(arrNumbers[0].length / 2);

// 1)	номери рядків від 0 до половини, стовпці від 0 до половини
let sum1 = 0;
for (let rowIndex = 0; rowIndex < halfRow; rowIndex++) {
	for (let colIndex = 0; colIndex < halfCol; colIndex++) {
		sum1 += arrNumbers[rowIndex][colIndex];
	}
}

document.write(`<p>1. Сума елементів у вказаній області: ${sum1};</p>`);

// 2)	номери рядків від 0 до половини, стовпці від половини до кінця

let sum2 = 0;
for (let rowIndex = 0; rowIndex < halfRow; rowIndex++) {
	for (
		let colIndex = halfCol;
		colIndex < arrNumbers[rowIndex].length;
		colIndex++
	) {
		sum2 += arrNumbers[rowIndex][colIndex];
	}
}

document.write(`<p>2. Сума елементів у вказаній області: ${sum2};</p>`);

// 3)номери рядків від половини до кінця, стовпці від 0 до половини

let sum3 = 0;
for (let rowIndex = halfRow; rowIndex < arrNumbers.length; rowIndex++) {
	for (let colIndex = 0; colIndex < halfCol; colIndex++) {
		sum3 += arrNumbers[rowIndex][colIndex];
	}
}

document.write(`<p>3. Сума елементів у вказаній області: ${sum3};</p>`);

// 4) номери рядків від половини до кінця , стовпці від половини до кінця

let sum4 = 0;
for (let rowIndex = halfRow; rowIndex < arrNumbers.length; rowIndex++) {
	for (
		let colIndex = halfCol;
		colIndex < arrNumbers[rowIndex].length;
		colIndex++
	) {
		sum4 += arrNumbers[rowIndex][colIndex];
	}
}

document.write(`<p>4. Сума елементів у вказаній області: ${sum4};</p>`);

// 5) Суму парних рядків

let sum5 = 0;
for (let rowIndex = 1; rowIndex < arrNumbers.length; rowIndex += 2) {
	for (let colIndex = 0; colIndex < arrNumbers[rowIndex].length; colIndex++) {
		sum5 += arrNumbers[rowIndex][colIndex];
	}
}

document.write(`<p>5. Сума елементів у вказаній області: ${sum5};</p>`);

// 6) Суму непарних стовпців

let sum6 = 0;
for (let rowIndex = 0; rowIndex < arrNumbers.length; rowIndex++) {
	for (
		let colIndex = 0;
		colIndex < arrNumbers[rowIndex].length;
		colIndex += 2
	) {
		sum6 += arrNumbers[rowIndex][colIndex];
	}
}

document.write(`<p>6. Сума елементів у вказаній області: ${sum6};</p>`);

// 7) У парних рядках – непарні стовпці, у непарних – парні.

let sum7 = 0;
for (let rowIndex = 0; rowIndex < arrNumbers.length; rowIndex++) {
	let startColIndex = rowIndex % 2 === 0 ? 1 : 0;
	for (
		let colIndex = startColIndex;
		colIndex < arrNumbers[rowIndex].length;
		colIndex+=2
	) {
		sum7 += arrNumbers[rowIndex][colIndex];
	}
}

document.write(`<p>7. Сума елементів у вказаній області: ${sum7};</p>`);
