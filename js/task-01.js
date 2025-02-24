// Отримуємо список категорій ul#categories
const categoriesList = document.querySelector('#categories');

// Отримуємо всі елементи li.item у списку
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій в консоль
console.log(`Number of categories: ${categoryItems.length}`);

// Для кожного елемента li.item
categoryItems.forEach(item => {
  // Отримуємо текст заголовку елемента h2
  const categoryTitle = item.querySelector('h2').textContent;

  // Отримуємо всі елементи li в категорії та виводимо їх кількість
  const categoryItemsCount = item.querySelectorAll('ul li').length;

  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsCount}`);
});

const students = [
  { name: "Манго", score: 83, courses: ["математика", "фізика"] },
  { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
  { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
];


const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']