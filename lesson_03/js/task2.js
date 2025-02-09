// Задача 2. З клавіатури вводиться ціна товару і кількість грошей.
// Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

//  Позначення
// 	amountMoney - кількість грошей
// 	priceItem - ціна товару
// 	restMoney - залишок грошей
// 	lotteryPrice - ціна лотерея

if (confirm("Почати тестування?")) {

	// Введення необхідних данних

	const amountMoney = parseFloat(prompt("Введіть кількість грошей", "100"));
	const priceItem = parseFloat(prompt("Введіть ціну товару", "20"));
	const lotteryPrice = 4;

	// Обчислення результатів

	const restMoney = amountMoney - priceItem;

	// Виведення результатів

	document.write(`
<p><strong>Кількість грошей</strong> - ${amountMoney} грн.;</p> 
<p><strong>Ціна товару</strong> - ${priceItem} грн.;</p>
`);

	if (restMoney < 0) {
		document.write(`
	<p>Ви не можете купити товар.</p>
	`);
	} else if (restMoney === 0) {
		document.write(`
	<p>Ви купли товар, але у вась більше не залишились грн.</p>
	`);
	} else {
		document.write(`
	<p>Ви купили товар, але залишились ${restMoney} грн.</p>
	`);
		if (restMoney >= lotteryPrice) {
			document.write(`	
		<p>Ви можете купити ${Math.floor(
			restMoney / lotteryPrice
		)} лотерейних білетів по 4 грн. за одну штуку.</p>
		`);
		} else {
			document.write(`
		<p>Увас залишилося ${restMoney} грн. Вам не вистачить купити навіть один лотерейний білет за 4 грн.</p>
		`);
		}
	}
}
