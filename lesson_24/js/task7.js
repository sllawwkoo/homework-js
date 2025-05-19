// Задача 7.
// Дано масив студентів (піб, курс, факультет).
// Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.

function analyzeStudents(data) {
	const faculties = new Set();
	const courseCount = new Map();

	for (const student of data) {
		faculties.add(student.faculty);

		const count = courseCount.get(student.course) || 0;
		courseCount.set(student.course, count + 1);
	}

	return {
		facultyCount: faculties.size,
		courseCount,
	};
}

function createdElement(parent, text) {
	const createdElement = document.createElement("p");
	createdElement.textContent = text;
	parent.appendChild(createdElement);
}

const students = [
	{ name: "Іван Петренко", course: 1, faculty: "ФІТ" },
	{ name: "Марія Шевченко", course: 2, faculty: "ФМВ" },
	{ name: "Олег Іванов", course: 1, faculty: "ФІТ" },
	{ name: "Катерина Сидоренко", course: 3, faculty: "ФМВ" },
	{ name: "Андрій Бондар", course: 4, faculty: "ФЕМ" },
	{ name: "Юлія Коваленко", course: 2, faculty: "ФІТ" },
	{ name: "Сергій Несторенко", course: 3, faculty: "ФІТ" },
	{ name: "Наталія Гринчук", course: 1, faculty: "ФМВ" },
];

const wrapper = document.querySelector(".result-wrapper");

const result = analyzeStudents(students);

createdElement(wrapper, `Кількість різних факультетів: ${result.facultyCount}`);
createdElement(wrapper, "Кількість студентів за курсами:");
for (const [course, count] of result.courseCount) {
	createdElement(wrapper, `Курс ${course}: ${count} студентів`);
}
