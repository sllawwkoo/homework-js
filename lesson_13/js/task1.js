// Задача 1.
// Генерація всіх підмножин:
// Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву.
// Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].

function generateSubsets(arr) {
	// Якщо масив порожній, повертаємо масив з порожньою підмножиною
	if (arr.length === 0) {
		return [[]];
	}

	// Виділяємо перший елемент масиву
	const firstElement = arr[0];
	// Рекурсивно генеруємо підмножини для решти масиву
	const subsetsWithoutFirst = generateSubsets(arr.slice(1));

	// Створюємо нові підмножини, додаючи перший елемент до кожної існуючої підмножини
	const subsetsWithFirst = subsetsWithoutFirst.map((subset) => [
		firstElement,
		...subset,
	]);

	// Об'єднуємо підмножини без першого елемента і з першим елементом та сортуємо спочатку за довжиною, потім за значенням першого елемента
	return [...subsetsWithoutFirst, ...subsetsWithFirst].sort(
		(a, b) => a.length - b.length || a[0] - b[0]
	);
}

const array = [1, 2, 3];
const allSubsets = generateSubsets(array);
for (let i = 0; i < allSubsets.length; i++) {
	document.write(`[${allSubsets[i]}] <br>`);
}

// function generateSubsets(arr) {
//   const result = []

//   function next(index, current) {
//     if (index === arr.length) {
//       result.push([...current])
//       return
//     }

    // Не включаємо поточний елемент
//     next(index + 1, current)

    // Включаємо поточний елемент
//     current.push(arr[index])
//     next(index + 1, current)
//     current.pop() // Відкат
//   }

//   next(0, [])
//   return result
// }

// const arr = [1, 2, 3]
// console.log(generateSubsets(arr))

// document.write(generateSubsets(arr).join('<br>'))
