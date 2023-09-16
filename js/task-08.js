
    // Функція, яка обробляє відправку форми
    function handleSubmit(event) {
      event.preventDefault(); // Зупиняємо перезавантаження сторінки при відправці форми
  
      const form = event.target;
      const formData = new FormData(form);
      const data = {};
  
      formData.forEach((value, key) => {
        data[key] = value;
      });
  
      // Перевірка на заповненість полів, Виправив на або як ви і сказали!
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
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', handleSubmit);
    }

  
  
  
  
  
  