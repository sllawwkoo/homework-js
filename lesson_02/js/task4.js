// Задача 4.
// Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

/* Позначення
	lengthInCm - довжина у сантиметрах
	lengthInMeters - довжина у метрах
	lengthInKilometers - довжина у кілометрах
*/

// Введення необхідних данних

const lengthInCm = parseFloat(prompt('Введіть довжину у сантиметрах', '5'));

// Обчислення результатів

const lengthInMeters= lengthInCm / 100;
const lengthInKilometers = Number((lengthInMeters / 1000).toPrecision(6));

// Виведення результатів

document.write(`
<p><strong>Довжина у сантиметрах</strong> - ${lengthInCm}см;</p>
<p><strong>Довжина у метрах</strong> - ${lengthInMeters}м;</p>
<p><strong>Довжина у кілометрах</strong> - ${lengthInKilometers}км;</p>
`);