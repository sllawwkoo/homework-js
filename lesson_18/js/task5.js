// Задача 4.
// Відобразити таблицю 3*4 з випадковими числами
// (її треба динамічно створити і вставити на сторінку)

function getRandomNumber(min = 1, max = 99) {
	return min + Math.floor(Math.random() * (max - min + 1));
}

function createTable(rows = 3, cols = 4) {
	const table = document.createElement("table");
	for (let i = 0; i < rows; i++) {
		const tr = document.createElement("tr");
		for (let j = 0; j < cols; j++) {
			const td = document.createElement("td");
			td.textContent = getRandomNumber();
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	return table;
}

document.querySelector(".result-wrapper").append(createTable());
