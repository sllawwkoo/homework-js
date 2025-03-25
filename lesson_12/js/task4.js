// Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
//Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран (стрілки не потрібні).

function getRandomArray(arrayLength, minValue = 1, maxValue = 100) {
	return Array.from(
		{ length: arrayLength },
		() => minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	);
}

const arrRandom = getRandomArray(5, 1, 9);

document.write(`
<p>Початковий масив:[${arrRandom}]</p>
`);

function arrBubbleSort(array) {
	let arr = [...array];
	let countExchanges = 0; // кількість обмінів
	let countComparisons = 0; // кількість порівнянь
	let endIndex = arr.length;
	let change;
	let result = `<p><strong>Сортування бульбашкою:</strong></p>`;

	do {
		change = false;
		for (let i = 1; i < endIndex; i++) {
			if (arr[i - 1] > arr[i]) {
				const temp = arr[i - 1];
				arr[i - 1] = arr[i];
				arr[i] = temp;
				change = true;
				countExchanges++;
				result += `<p>Обмін№${countExchanges}: <br>[${arr}]</p><br>`;
			}
			countComparisons++;
		}
		endIndex--;
	} while (change);

	result += `<p>Кількість обмінів: ${countExchanges}</p><p>Кількість порівнянь: ${countComparisons}</p>`;

	return result;
}

function arrCoctailSort(array) {
	let arr = [...array];
	let countExchanges = 0; // кількість обмінів
	let countComparisons = 0; // кількість порівнянь
	let leftIndex = 0;
	let rightIndex = arr.length - 1;
	let result = `<p><strong>Сортування змішуванням:</strong></p>`;

	while (leftIndex < rightIndex) {
		//--- проходимось зліва-направо
		let changed = false;
		for (let i = leftIndex + 1; i <= rightIndex; i++) {
			if (arr[i - 1] > arr[i]) {
				let temp = arr[i - 1];
				arr[i - 1] = arr[i];
				arr[i] = temp;
				changed = true;
				countExchanges++;
				result += `<p>Обмін№${countExchanges}: <br>[${arr}]</p><br>`;
			}
			countComparisons++;
		}
		rightIndex--;
		if (changed === false) break;
		//---- проходимось справа-наліво
		changed = false;
		for (let i = rightIndex; i > leftIndex; i--) {
			if (arr[i - 1] > arr[i]) {
				let temp = arr[i - 1];
				arr[i - 1] = arr[i];
				arr[i] = temp;
				changed = true;
				countExchanges++;
				result += `<p>Обмін№${countExchanges}: <br>[${arr}]</p><br>`;
			}
			countComparisons++;
		}
		leftIndex++;
		if (changed === false) break;
	}

	result += `<p>Кількість обмінів: ${countExchanges}</p><p>Кількість порівнянь: ${countComparisons}</p>`;

	return result;
}

function arrInsertionSort(array) {
	let arr = [...array];
	let countExchanges = 0; // кількість обмінів
	let countComparisons = 0; // кількість порівнянь
	let result = `<p><strong>Сортування включеннями:</strong></p>`;

	for (let k = 1; k < arr.length; k++) {
		currentElement = arr[k];
		let i = k - 1;
		while (i >= 0 && arr[i] > currentElement) {
			arr[i + 1] = arr[i];
			i--;
			countExchanges++;
			countComparisons++;
			result += `<p>Обмін№${countExchanges}: <br>[${arr}]</p><br>`;
		}

		arr[i + 1] = currentElement;
		countExchanges++;
		result += `<p>Обмін№${countExchanges}: <br>[${arr}]</p><br>`;
	}

	result += `<p>Кількість обмінів: ${countExchanges}</p><p>Кількість порівнянь: ${countComparisons}</p>`;

	return result;
}

document.write(arrBubbleSort(arrRandom));

document.write(arrCoctailSort(arrRandom));

document.write(arrInsertionSort(arrRandom));
