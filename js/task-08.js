function handleSubmit(event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки

    const form = event.target; // Отримуємо форму
    const formData = new FormData(form); // Отримуємо дані з форми
    const formDataObject = {}; // Об'єкт для збереження даних форми

    // Проходимося по всіх елементах форми і додаємо їх у об'єкт
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Перевіряємо, чи всі поля заповнені
    if (formDataObject.email && formDataObject.password) {
        // Виводимо об'єкт з даними у консоль
        console.log(formDataObject);
        // Очищаємо значення полів форми
        form.reset();
    } else {
        // Виводимо повідомлення про незаповнені поля
        alert('Всі поля повинні бути заповнені!');
    }
}
