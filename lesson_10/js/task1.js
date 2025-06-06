// Задача 1.
// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000).
//  Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

function getRandomArray(arrayLength, minValue = 1, maxValue = 10000) {
	return Array.from(
		{ length: arrayLength },
		() => minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	);
}

const baseArray = getRandomArray(10);

const newArray = baseArray.filter(el => el > 1000);

document.write(`
<p>Масив цін:[${baseArray}]</p>
<p>Новий масив: [${newArray}]</p>
`);