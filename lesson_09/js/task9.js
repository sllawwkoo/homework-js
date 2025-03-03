// Задача 9.
// Дано масив імен. Сформувати масив з перших літер цих імен.

const arrNames = ["William", "Isabella", "Nathan", "Noah", "Emily", "Ryan"];

document.write(`<p>Дано масив імен: [${arrNames}]</p>`);

const arrFirstLetters = arrNames.map((name) => name[0]);

document.write(`<p>Масив з перших літер цих імен: [${arrFirstLetters}]</p>`);