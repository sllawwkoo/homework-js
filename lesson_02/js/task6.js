// Задача 6.
// З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

//  Позначення
// 	firstItemPrice - вартість першого товару
// 	secondItemPrice - вартість другого товару
// 	thirdItemPrice - вартість третього товару

// 	firstItemQuantity - кількість одиниць першого товару
// 	secondItemQuantity - кількість одиниць другого товару
// 	thirdItemQuantity - кількість одиниць третього товару

// 	firstItemTotalPrice - вартість першого товару
// 	secondItemTotalPrice - вартість другого товару
// 	thirdItemTotalPrice - вартість третього товару

// 	totalPrice - загальна сума усіх товарів

// Введення необхідних данних

const firstItemPrice = parseFloat(
	prompt("Введіть вартість першого товару в гривні", "30")
);
const secondItemPrice = parseFloat(
	prompt("Введіть вартість другого товару в гривні", "50")
);
const thirdItemPrice = parseFloat(
	prompt("Введіть вартість третього товару в гривні", "70")
);

const firstItemQuantity = parseFloat(
	prompt("Введіть кількість першого товару", "5")
);
const secondItemQuantity = parseFloat(
	prompt("Введіть кількість другого товару", "2")
);
const thirdItemQuantity = parseFloat(
	prompt("Введіть кількість третього товару", "3")
);

// Обчислення результатів

const firstItemTotalPrice = (firstItemPrice * firstItemQuantity).toFixed(2);
const secondItemTotalPrice = (secondItemPrice * secondItemQuantity).toFixed(2);
const thirdItemTotalPrice = (thirdItemPrice * thirdItemQuantity).toFixed(2);

const totalPrice = (
	parseFloat(firstItemTotalPrice) +
	parseFloat(secondItemTotalPrice) +
	parseFloat(thirdItemTotalPrice)
).toFixed(2);

// Виведення результатів

document.write(`
<div class="receipt">
	<div class="receipt__header">
		<h3 class="receipt__title">Фіскальний чек №f12355</h3>
		<p class="receipt__label">Магазин "Фермер"</p>
		<p class="receipt__owner">ФОП Петренко Петро Володимирович</p>
		<p class="receipt__address">Україна, м. Київ <br> вул. Ірпінська, 26 <br> ІПН 2626262626</p>
	</div>
	<div class="receipt__body">
		<div class="receipt__items">
			<div class="receipt__item item">
				<div class="item__quantity">
					<span>${firstItemQuantity}</span>  x  <span>${firstItemPrice}</span>
				</div>
				<div class="item__info">
					<span class="item__name">Картопля</span> <span class="item__price">${firstItemTotalPrice}</span>
				</div>
			</div>
			<div class="receipt__item item">
				<div class="item__quantity">
					<span>${secondItemQuantity}</span>  x  <span>${secondItemPrice}</span>
				</div>
				<div class="item__info">
					<span class="item__name">Помідори</span> <span class="item__price">${secondItemTotalPrice}</span>
				</div>
			</div>
			<div class="receipt__item item">
				<div class="item__quantity">
					<span>${thirdItemQuantity}</span>  x  <span>${thirdItemPrice}</span>
				</div>
				<div class="item__info">
					<span class="item__name">Огірки</span> <span class="item__price">${thirdItemTotalPrice}</span>
				</div>
			</div>
		</div>
		<div class="receipt__total">
			<span class="receipt__total-label">СУМА</span> <span class="receipt__total-price">${totalPrice} грн.</span>
		</div>
		<div class="receipt__total">
			<span class="receipt__total-label">ГОТІВКА</span> <span class="receipt__total-price">${totalPrice} грн.</span>
		</div>
		<p class="receipt__footer">ДЯКУЄМО ЗА ПОКУПКУ!</p>
	</div>
</div>
`);
