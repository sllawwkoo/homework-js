// Задача 3.
// Дано масив 30 випадкових цілих чисел.
// Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.

function getRandomArray(arrayLength, minValue = 1, maxValue = 100) {
	return Array.from(
		{ length: arrayLength },
		() => minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	);
}

const randomArray = getRandomArray(30);

document.write(`
<p>Початковий масив:[${randomArray}]</p>
`);

let countExchanges = 0; // кількість обмінів
let countComparisons = 0; // кількість порівнянь

for (let k = 1; k < randomArray.length; k++) {
	currentElement = randomArray[k];
	let i = k - 1;
	while (i >= 0 && randomArray[i] > currentElement) {
		randomArray[i + 1] = randomArray[i];
		i--;
		countExchanges++;
		countComparisons++;
	}

	randomArray[i + 1] = currentElement;
	countExchanges++;
}

document.write(`
<p>Кількість обмінів: ${countExchanges}</p>
<p>Кількість порівнянь: ${countComparisons}</p>
`);

document.write(`
<p>Відсортований масив:[${randomArray}]</p>
`);
