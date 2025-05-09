// Задача 7.
// Дано список студентів
// (ім’я і дата народження: у формі тексту (день.місяць.рік).
// Знайти найстаршого студента

function findOldestStudent(students) {
	if (students.length === 0) return null;

	return students.reduce((oldest, current) => {
		const [currDay, currMonth, currYear] = current.birthDate
			.split(".")
			.map(Number);
		const [oldDay, oldMonth, oldYear] = oldest.birthDate.split(".").map(Number);

		const currDate = new Date(currYear, currMonth - 1, currDay);
		const oldDate = new Date(oldYear, oldMonth - 1, oldDay);

		return currDate < oldDate ? current : oldest;
	});
}

const students = [
	{ name: "Андрій", birthDate: "15.03.2001" },
	{ name: "Олена", birthDate: "02.11.1999" },
	{ name: "Одарка", birthDate: "25.06.2002" },
	{ name: "Ігор", birthDate: "10.01.2000" },
	{ name: "Тимофій", birthDate: "20.04.1998" },
	{ name: "Марія", birthDate: "15.03.2001" },
	{ name: "Олена", birthDate: "02.11.1997" },
	{ name: "Вікторія", birthDate: "25.06.2002" },
	{ name: "Ігор", birthDate: "10.01.2000" },
	{ name: "Олександр", birthDate: "20.04.1998" },
];

const list = document.querySelector(".students-list");
if (list) {
	students.forEach((student) => {
		const li = document.createElement("li");
		li.innerText = `${student.name}, дата народження: ${student.birthDate}`;
		list.append(li);
	});
}

const result = document.querySelector("#result");
const oldest = findOldestStudent(students);
if (oldest) {
	result.innerHTML = `Найстарший студент:<br> ${oldest.name}, дата народження: ${oldest.birthDate}`;
}
