


// Получаем все элементы .grid-item
const gridItems = document.querySelectorAll('.grid-item');

// Обрабатываем каждый .grid-item
gridItems.forEach(item => {
    // Добавляем слушатель события клика
    item.addEventListener('click', function() {
        // Прокручиваем страницу вниз на 500 пикселей при клике на изображение
        window.scrollBy({
            top: 10000, // Расстояние прокрутки вниз
            behavior: 'smooth' // Плавная анимация прокрутки
        });
        // Удаляем класс selected у всех элементов
        gridItems.forEach(gridItem => {
            gridItem.classList.remove('selected');
        });
        // Добавляем класс selected только к текущему элементу
        this.classList.add('selected');
    });
});


// Функция для отображения формы регистрации
function showRegistrationForm(newContent) {
    const contentDiv = document.getElementById('content');
    const formHTML = newContent+`
            <a href="tel:89268111152" type="submit" class="input_button">Записаться</a>
    `;
    contentDiv.innerHTML = formHTML;

    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = new FormData(registrationForm);
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }
    });

    // Прокрутка страницы к форме регистрации
    contentDiv.scrollIntoView({ behavior: 'smooth' });

    // Добавляем обработчик клика на динамически созданные временные слоты
    contentDiv.addEventListener('click', function(event) {
        const clickedElement = event.target;
        if (clickedElement.classList.contains('time-slot') && !clickedElement.classList.contains('booked')) {
            const selectedTimeSlots = document.querySelectorAll('.time-slot.selected');
            selectedTimeSlots.forEach(slot => slot.classList.remove('selected'));
            clickedElement.classList.add('selected');
        }
    });
}
// Добавляем обработчик клика на каждый временной слот
timeSlots.forEach(slot => {
    slot.addEventListener('click', function() {
        if (!this.classList.contains('booked')) {
            if (!this.classList.contains('selected')) {
                // Сначала удаляем класс 'selected' у всех временных слотов
                timeSlots.forEach(slot => {
                    slot.classList.remove('selected');
                });
                // Затем добавляем класс 'selected' только к выбранному временному слоту
                this.classList.add('selected');
            }
        }
    });
});


