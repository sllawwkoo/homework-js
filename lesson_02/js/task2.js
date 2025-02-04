// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

//  Позначення
// 	yearOfBirth - рік народження
// 	currentYear - поточний рік
// 	age - кількість років

// Введення необхідних данних

const yearOfBirth = parseInt(prompt("Введіть ваш рік народження", "1982"));
const currentYear = 2025;

// Обчислення результатів

const age = currentYear - yearOfBirth;

// Виведення результатів

document.write(`
<p><strong>Рік народження</strong> - ${yearOfBirth};</p> 
<p><strong>Поточний рік</strong> - ${currentYear};</p>
<p><strong>Кількість років</strong> - ${age}</p>
`);