"use strict";

// Задача 2.
// На формі вводять 7 числових значень
// (вік, зріст, вага, заробітна плата, стаж, номер відділу, порядковий номер).
// Додати подію обробки події click на форму і якщо клік на внутрішньому input,
// то автоматично замінювати значення його на 0. Використати делегування.

class Forma {
	constructor(dataList, cssObj) {
		this.dataList = dataList;
		this.cssObj = cssObj;
	}

	createForm() {
		const form = document.createElement("form");
		form.classList.add(this.cssObj.form);

		return form;
	}

	createFormLine(id, label, type) {
		const formLine = document.createElement("div");
		formLine.classList.add(this.cssObj.formLine);

		const labelElement = document.createElement("label");
		labelElement.setAttribute("for", id);
		labelElement.textContent = label;

		const inputElement = document.createElement("input");
		inputElement.setAttribute("type", type);
		inputElement.setAttribute("id", id);

		formLine.append(labelElement, inputElement);
		
		return formLine;
	}

	render(selector) {
		const form = this.createForm();
		selector.append(form);

		for (const key in this.dataList) {
			const formLine = this.createFormLine(key, this.dataList[key], "number");
			form.append(formLine);
		}

		form.addEventListener("click", (event) => {
			if (event.target.tagName === "INPUT") {
				event.target.value = 0;
			}
		});
	}
}

const data = {
	age: "Вік",
	height: "Зріст",
	weight: "Вага",
	salary: "Заробітна плата",
	experience: "Стаж",
	department: "Номер відділу",
	number: "Порядковий номер",
};

const styleObj = {
	form: "form",
	formLine: "form__line",
};

const form = new Forma(data, styleObj);
form.render(document.querySelector(".result-wrapper"));