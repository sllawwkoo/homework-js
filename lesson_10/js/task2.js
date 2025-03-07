// Задача 2.
// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000).
//  Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

function getRandomArray(arrayLength, minValue = 1, maxValue = 10000) {
	return Array.from(
		{ length: arrayLength },
		() => minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	);
}

const baseArray = getRandomArray(10);

// const newArray = baseArray
// 	.map((element, index) => (element > 1000 ? index : null))
// 	.filter((index) => index !== null);

const newArray = baseArray.reduce((arrNew, el, index) => {
	if (el > 1000) arrNew.push(index);
	return arrNew;
}, []);

document.write(`
<p>Масив цін:[${baseArray}]</p>
<p>Новий масив: [${newArray}]</p>
`);
