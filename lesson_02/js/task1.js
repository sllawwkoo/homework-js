// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

// Крок 0. Позначення величин
// a : number
// b : number
// sum : number
// multiplication : number
// division : number

// Крок 1. Введення необхідних даних
const a = parseFloat(prompt("Введіть перше число", "1"));
const b = parseFloat(prompt("Введіть друге число", "1"));

// Крок 2. Обчислення результатів
const sum = a + b;
const multiplication = a * b;
const division = a / b;

// Крок 3. Виведення результатів
document.write(`
<p><strong>a</strong> = ${a}; <strong>b</strong> = ${b};</p>
<div class="result">
	<h3 class="result__title">Операція</h3>
	<h3 class="result__title">Результат</h3>
	<span>Сума</span>
	<span>${sum.toFixed(2)}</span>
	<span>Добуток</span>
	<span>${multiplication.toFixed(2)}</span>
	<span>Частка</span>
	<span>${division.toFixed(2)}</span>
</div>
`);
