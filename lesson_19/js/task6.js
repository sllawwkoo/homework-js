// Задача 6.
// Дано список спортсменів.
// Потрібно сформувати список тих, які будуть брати участь у змаганні.
// При цьому є два стовпці. В одному відображені всі спортсмени,
// в іншому – список тих, хто був вибраний.
// При натисканні на зелену стрілку спортсмен переміщається у список для змагань.
// При натисканні на червону стрілку спортсмен переміщається у загальний список.



class AthletesList {
	constructor(athletesList) {
		this.athletesList = athletesList;
	}

	moveToChosenList(event) {
		const target = event.target;

		if (target.classList.contains("athlete-general-btn")) {
			const athlet = target.closest(".athlete-item");
			athlet.lastElementChild.classList.remove("athlete-general-btn");
			athlet.lastElementChild.classList.add("athlete-chosen-btn");
			this.chosenList.lastElementChild.append(athlet);
		}
	}

	moveToGeneralList(event) {
		const target = event.target;

		if (target.classList.contains("athlete-chosen-btn")) {
			const athlet = target.closest(".athlete-item");
			athlet.lastElementChild.classList.remove("athlete-chosen-btn");
			athlet.lastElementChild.classList.add("athlete-general-btn");
			this.generalList.lastElementChild.append(athlet);
		}
	}

	createAthlet(name) {
		const athlet = document.createElement("div");
		athlet.classList.add("athlete-item");

		const athletName = document.createElement("h4");
		athletName.classList.add("athlete-name");
		athletName.innerText = name;

		const generalBtn = document.createElement("button");
		generalBtn.classList.add("athlete-general-btn");

		athlet.append(athletName, generalBtn);
		return athlet;
	}

	createGeneralList() {
		const generalList = document.createElement("div");
		generalList.classList.add("generate-list");

		this.generalList = generalList;

		const title = document.createElement("h3");
		title.classList.add("title");
		title.innerText = "Загальний список";

		const list = document.createElement("div");
		list.classList.add("athlete-list");

		this.athletesList.forEach((name) => {
			const athlet = this.createAthlet(name);
			list.append(athlet);
		});

		generalList.append(title, list);

		generalList.addEventListener("click", this.moveToChosenList.bind(this));
		return generalList;
	}

	createChosenList() {
		const chosenList = document.createElement("div");
		chosenList.classList.add("chosen-list");

		this.chosenList = chosenList;

		const title = document.createElement("h3");
		title.classList.add("title");
		title.innerText = "Обранні для змагання";

		const list = document.createElement("div");
		list.classList.add("athlete-list");

		chosenList.append(title, list);

		chosenList.addEventListener("click", this.moveToGeneralList.bind(this));
		return chosenList;
	}

	render(selector) {
		const container = document.createElement("div");
		container.classList.add("athletes");
		container.append(this.createGeneralList(), this.createChosenList());

		selector?.append(container);
	}
}

const athletesList = [
	"John Depp",
	"Sara Wik",
	"Den Miro",
	"Alan Woo",
	"Piter Smith",
	"Alex Doe",
];

const athletes = new AthletesList(athletesList);
athletes.render(document.querySelector(".result-wrapper"));