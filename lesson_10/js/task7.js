// Задача 7.
// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000).
// Визначати, чи усі ціни більше за 1000

function getRandomArray(arrayLength, minValue = 1, maxValue = 10000) {
	return Array.from(
		{ length: arrayLength },
		() => minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	);
}

const baseArray = getRandomArray(10);

const isAllPricesAbove1000 = baseArray.every((el) => el > 1000);

document.write(`
<p>Масив цін:[${baseArray}]</p>
<p>Усі ціни більше за 1000: ${isAllPricesAbove1000}</p>
`);
