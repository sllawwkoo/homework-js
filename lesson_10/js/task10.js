// Задача 10.
// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000).
// Підрахувати суму цін, що більше за 1000

function getRandomArray(arrayLength, minValue = 1, maxValue = 10000) {
	return Array.from(
		{ length: arrayLength },
		() => minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	);
}

const baseArray = getRandomArray(10);

const firstPriceAbove1000 = baseArray.find((el) => el > 1000);

document.write(`
<p>Масив цін:[${baseArray}]</p>
<p>Перша ціна що більша за 1000: ${firstPriceAbove1000}</p>
`);
