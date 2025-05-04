// Задача 4.
// Динамічний пошук.
// Є список працівників і поле пошуку.
// При введенні відображаються усі, які містять вказаний фрагмент.

class EmployeeSearch {
	constructor(dataList) {
		this.dataList = dataList;
		this.listItems = [];
	}

	createSearchLine() {
		const formLine = document.createElement("div");
		formLine.classList.add("search__line");

		const labelElement = document.createElement("label");
		labelElement.setAttribute("for", "search");
		labelElement.textContent = "Працівники";

		const inputElement = document.createElement("input");
		inputElement.setAttribute("type", "text");
		inputElement.setAttribute("id", "search");
		inputElement.placeholder = "Пошук";

		this.inputElement = inputElement;
		this.inputElement.addEventListener(
			"input",
			this.handleSearchEmployees.bind(this)
		);

		formLine.append(labelElement, inputElement);

		return formLine;
	}

	createSearchList() {
		const searchList = document.createElement("ul");
		searchList.classList.add("search__list");

		for (const name of this.dataList) {
			const li = document.createElement("li");
			li.innerText = name;
			searchList.appendChild(li);

			this.listItems.push({ name, element: li });
		}

		this.searchList = searchList;
		return searchList;
	}

	createSearchItem(name) {
		const searchItem = document.createElement("li");
		searchItem.innerText = name;

		this.searchItem = searchItem;

		return searchItem;
	}

	createSearchEmptyItem() {
		const li = document.createElement("li");
		li.innerText = "Нічого не знайдено!";
		li.classList.add("search__empty");
		li.style.display = "none";
		this.emptyItem = li;
		return li;
	}

	handleSearchEmployees() {
		const query = this.inputElement.value.trim().toLowerCase();
		let matchFound = false;

		for (const { name, element } of this.listItems) {
			if (name.toLowerCase().includes(query)) {
				element.hidden = false;
				matchFound = true;
			} else {
				element.hidden = true;
			}
		}

		this.emptyItem.style.display = matchFound ? "none" : "block";
	}

	render(selector) {
		const container = document.querySelector(selector);
		if (!container) return;

		const wrapper = document.createElement("div");
		wrapper.classList.add("search");

		const line = this.createSearchLine();
		const list = this.createSearchList();
		const empty = this.createSearchEmptyItem();

		list.append(empty);
		wrapper.append(line, list);
		container.append(wrapper);
	}
}

const employeesList = [
	"Іваненко Іван",
	"Петренко Петро",
	"Сидоренко Сидір",
	"Коваль Андрій",
	"Ткаченко Олена",
	"Шевченко Марія",
	"Бондар Сергій",
	"Кравчук Наталія",
	"Мельник Анна",
	"Довженко Юрій",
];

const search = new EmployeeSearch(employeesList);
search.render(".result-wrapper");
