"use strict";

// Задача 2.
// Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage).
// Періодично випадковим чином вибирати якусь з справ і виводити користувачу
// (з використанням confirm).
// Якщо користувач натискає на «Ок», то видаляти цю задачу.

if (confirm("Почати тестування?")) {
	function initializeTasks(tasksArray) {
		if (!localStorage.getItem("todoTasks")) {
			localStorage.setItem("todoTasks", JSON.stringify(tasksArray));
		}
	}

	function loadTasks() {
		const saved = localStorage.getItem("todoTasks");
		return saved ? JSON.parse(saved) : [];
	}

	function saveTasks(tasks) {
		localStorage.setItem("todoTasks", JSON.stringify(tasks));
	}

	function promptRandomTask() {
		const tasks = loadTasks();

		if (tasks.length === 0) {
			clearInterval(taskInterval);
			alert("Усі задачі виконано!");
			return;
		}

		const index = Math.floor(Math.random() * tasks.length);
		const task = tasks[index];

		if (confirm(`Задача:\n"${task}"\n\nВиконати зараз?`)) {
			tasks.splice(index, 1);
			saveTasks(tasks);
		}
	}

	const tasksList = [
		"Пройтися на 30 хвилин",
		"Зробити зарядку",
		"Почитати 10 сторінок книги",
		"Полити кімнатні рослини",
		"Навести лад у поштовій скриньці",
	];

	initializeTasks(tasksList);

	const taskInterval = setInterval(promptRandomTask, 3000);
}
