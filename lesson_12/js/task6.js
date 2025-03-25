// Задача 6.
// Дано масив імен. 
// Застосовуючи відповідне сортування та бінарний пошук визначити, 
// чи є у масиві ім’я довжиною 5 символів і під яким індексом.

const names = [
	"Emma",
	"Olivia",
	"Sophia",
	"Isabella",
	"Ava",
	"Charlotte",
	"Mia",
	"Amelia",
	"Harper",
	"Evelyn",
	"Olga",
	"Lily",
	"Hannah",
	"Grace",
	"Scarlett",
];

function arrInsertionSort(arr) {
	for (let k = 1; k < arr.length; k++) {
		currentElement = arr[k];
		let i = k - 1;
		while (i >= 0 && arr[i] > currentElement) {
			arr[i + 1] = arr[i];
			i--;
		}

		arr[i + 1] = currentElement;
	}

	return arr;
}

function binarySearchIndexBylength(arr, searchElementLength) {
	let start = 0;
	let end = arr.length - 1;
	let index = -1;

	while (start <= end) {
		let middle = Math.floor((start + end) / 2);

		if (arr[middle].length === searchElementLength) return (index = middle);
		if (arr[middle].length < searchElementLength) start = middle + 1;
		if (arr[middle].length > searchElementLength) end = middle - 1;
	}

	return index;
}


document.write(`
	<p>Початковий масив:[${names}]</p>
	`)

arrInsertionSort(names);

document.write(`
	<p>Відсортований масив:[${names}]</p>
	`)

let indexName = binarySearchIndexBylength(names, 5);

if (indexName === -1) {
	document.write(`<p>У масиві немає імені довжиною 5 символів</p>`);
} else {
	document.write(
		`<p>У масиві ім'я довжиною 5 символів знаходиться під індексом ${indexName}</p>`
	);
}
