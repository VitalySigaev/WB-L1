
//  Необходимо реализовать простое поле ввода адреса с функцией геокодинга: пользователь вводит данные в поле с помощью одного из геоинформационных сервисов (Яндекс.Карты, ДаДата, GraphHopper), подбирается адрес. Найденные данные должны отображаться в выпадающем списке, из которого можно выбрать подходящее значение. 

// Получаем ссылку на поле ввода и выпадающий список
const addressInput = document.getElementById('address-input');
const addressDropdown = document.getElementById('address-dropdown');

// Инициализация карты Яндекс
ymaps.ready(() => {
    // Метод добавления элемента на страницу
    function addElement(elem) {
        addressDropdown.append(elem);
    }

    // Метод создания элемента
    function createElement(data) {
        const item = document.createElement('option');

        item.textContent = data;

        addElement(item);
    }

    // Метод поиска адресов
    function geocode(address) {
        // geocode - cтатическая функция, обрабатывающая запросы геокодирования
        ymaps.geocode(address)
            .then(res => {
                console.log(res)
                // GeoObjects - Коллекция геообъектов карты.
                // метод getLength - Возвращает длину коллекции.
                if (res.geoObjects.getLength() < 1) {
                    // Если элементов в коллекции нет
                    createElement('Ничего не найдено');

                    return
                }

                // Метод each - для каждого дочернего геообъекта, вызывает функцию-обработчик.
                res.geoObjects.each((item) => {
                    createElement(item.getAddressLine());
                })
            })
    };

    // Функция обёртка (debounce) для слушателя событий, создающая задержку между запросами
    // https://zerowp.com/efficient-user-input-delay-in-javascript-typescript/
    function observeInput() {
        let timer;

        addressInput.addEventListener('input', () => {
            // Удаление слушателя
            clearTimeout(timer);

            // Очищение содержимого перед новым запросом
            addressDropdown.innerHTML = '';

            timer = setTimeout(() => {
                // Отправка данных для запроса
                geocode(addressInput.value);
            }, 1000);
        });
    }

    // Вызов функции обёртки установки слушателя
    observeInput();
});