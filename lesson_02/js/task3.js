"use strict";

// Задача 03. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

// Позначення
// 	oneItemPrice - вартість одиниці товару
// 	itemsQuantity - кількість товару

// 	totalCost - загальна вартість
// 	vatInPercent - ставка ПДВ
// 	vatValue - ПДВ від загальної вартості товару

// Введення необхідних данних

const oneItemPrice = parseFloat(
	prompt("Введіть вартість одиниці товару", "15")
);
const itemsQuantity = parseFloat(prompt("Введіть кількість товару", "5"));
const vatInPercent = 5;

// Обчислення результатів

const totalCost = oneItemPrice * itemsQuantity;
const vatValue = (totalCost * 5) / 100;

// Виведення результатів

document.write(`
<p><strong>Вартість одиниці товару</strong> - ${oneItemPrice};</p> 
<p><strong>Кількість товару</strong> - ${itemsQuantity};</p>
<p><strong>Загальна вартість</strong> - ${totalCost.toFixed(2)};</p>
<p><strong>ПДВ</strong> - ${vatInPercent} %;</p>
<p><strong>ПДВ від загальної вартості товару</strong> - ${vatValue.toFixed(2)};</p>
`);