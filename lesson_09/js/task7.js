// Задача 7.
//Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.

const arrPrices = [1050, 700, 300, 2100, 500, 600, 700, 800, 2500, 1500];

document.write(`<p>Масив цін: [${arrPrices}]</p>`);

arrPrices.forEach((el, index, arr) => {
	if (el > 1000) {
		arr[index] *= 0.7;
	}
});

document.write(`<p>Змінений масив: [${arrPrices}]</p>`);