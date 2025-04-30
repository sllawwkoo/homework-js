// Задача 4.
// Дано 3 таблиці розмірності 3*3 з випадковими числами.
// Якщо відбувається клік на якійсь із клітинок,
// то до відповідної таблиці додається червона рамка
// (спробуйте додати можливість відображення кількості кліків біля назви таблиці з використанням відповідно доданого для цього атрибута).

function getRandomNumber(min = 1, max = 99) {
	return min + Math.floor(Math.random() * (max - min + 1));
}

function createTable(rows = 3, cols = 3) {
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

function createHeader(index, count) {
	const title = document.createElement("h3");
	title.classList.add("column__title");

	const spanText = document.createElement("span");
	spanText.textContent = `Таблиця №${index}`;

	const spanCount = document.createElement("span");
	spanCount.textContent = `Кількість кліків: ${count}`;

	title.append(spanText, spanCount);

	return {
		titleElement: title,
		textElement: spanText,
		countElement: spanCount,
	};
}

function createSectionTables(selector, step = 3) {
	const section = document.querySelector(selector);
	const clickCounts = Array(step).fill(0);

	for (let i = 0; i < step; i++) {
		const column = document.createElement("div");
		column.classList.add("column");

		const { titleElement,  countElement } = createHeader(i + 1, 0);
		const table = createTable();

		table.addEventListener("click", (e) => {
			if (e.target.tagName === "TD") {
				clickCounts[i]++;
				countElement.textContent = `Кількість кліків: ${clickCounts[i]}`;

				if (!table.classList.contains("active")) {
					table.classList.add("active");
				}
			}
		});

		column.append(titleElement, table);
		section.appendChild(column);
	}
}


createSectionTables(".result-wrapper");
