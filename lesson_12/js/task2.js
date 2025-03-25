// Задача 2.
// Дано масив 30 випадкових цілих чисел.
// Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.

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
let leftIndex = 0;
let rightIndex = randomArray.length - 1;

while (leftIndex < rightIndex) {
	//--- проходимось зліва-направо
	let changed = false;
	for (let i = leftIndex + 1; i <= rightIndex; i++) {
		if (randomArray[i - 1] > randomArray[i]) {
			let temp = randomArray[i - 1];
			randomArray[i - 1] = randomArray[i];
			randomArray[i] = temp;
			changed = true;
			countExchanges++;
		}
		countComparisons++;
	}
	rightIndex--;
	if (changed === false) break;
	//---- проходимось справа-наліво
	changed = false;
	for (let i = rightIndex; i > leftIndex; i--) {
		if (randomArray[i - 1] > randomArray[i]) {
			let temp = randomArray[i - 1];
			randomArray[i - 1] = randomArray[i];
			randomArray[i] = temp;
			changed = true;
			countExchanges++;
		}
		countComparisons++;
	}
	leftIndex++;
	if (changed === false) break;
}

document.write(`
<p>Кількість обмінів: ${countExchanges}</p>
<p>Кількість порівнянь: ${countComparisons}</p>
`);

document.write(`
<p>Відсортований масив:[${randomArray}]</p>
`);
