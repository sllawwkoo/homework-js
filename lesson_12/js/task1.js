// Задача 1.
// Дано масив 30 випадкових цілих чисел. 
// Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою

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
let endIndex = randomArray.length;
let change

do {
	change = false;
	for(let i = 1; i < endIndex; i++) {
		if(randomArray[i - 1] > randomArray[i]) {
			const temp = randomArray[i - 1]
			randomArray[i - 1] = randomArray[i]
			randomArray[i] = temp
			change = true;
			countExchanges++;
		}
		countComparisons++;
	}
	endIndex--
} while (change);

document.write(`
<p>Кількість обмінів: ${countExchanges}</p>
<p>Кількість порівнянь: ${countComparisons}</p>
`);

document.write(`
<p>Відсортований масив:[${randomArray}]</p>
`);