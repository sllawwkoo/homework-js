// Задача 2.
// Дано масив імен спортсменів.
// Розробити програму для виведення усіх можливих результатів змагань (списки імен у відповідності до місць, які вони займуть).

function generateCompetitionResults(arr, result) {
	if (result.length === 3) document.write(`<span>${result}</span> <br>`);
	else {
		for (const name of arr) {
			result.push(name);
			generateCompetitionResults(
				arr.filter((n) => n !== name),
				result
			);
			result.pop();
		}
	}
}

const athletes = ["Олександр", "Іван", "Михайло", "Петро"];
document.write(`
	<p><strong>Масив імен спортсменів</strong>: [${athletes}]</p>
	`)
generateCompetitionResults(athletes, [])
