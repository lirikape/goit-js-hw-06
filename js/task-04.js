function handleSubmit(event) {
  event.preventDefault(); // Зупиняємо перезавантаження сторінки при відправці форми

  const form = event.target;
  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Перевірка на заповненість полів
  if (!data.email || !data.password) {
    alert('Всі поля повинні бути заповнені');
    return;
  }

  // Виведення об'єкта з введеними даними в консоль
  console.log(data);

  // Очищення полів форми
  form.reset();
}

// Додаємо слухача події submit до форми
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', handleSubmit);