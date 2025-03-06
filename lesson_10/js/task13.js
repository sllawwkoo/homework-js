// Задача 11.
// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000).
// Знайти індекс останньої ціни, що більше за 1000

function getRandomArray(arrayLength, minValue = 1, maxValue = 10000) {
	return Array.from(
		{ length: arrayLength },
		() => minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	);
}

const baseArray = getRandomArray(10);

const lastIndexAbove1000 = baseArray.findLastIndex((el) => el > 1000);

document.write(`
<p>Масив цін:[${baseArray}]</p>
<p>Індекс останньої ціни що більша за 1000: ${lastIndexAbove1000}</p>
`);
