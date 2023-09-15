const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', function () {
    const expectedLength = parseInt(inputElement.getAttribute('data-length'));
    const inputLength = inputElement.value.length;

    if (inputLength === expectedLength) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
    } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
    }
});