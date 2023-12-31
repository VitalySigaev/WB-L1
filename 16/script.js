'use strict';
// Задача на модули и использование внешних библиотек: напишите модуль, который экспортирует функцию для работы с датами. Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.
// Установил библиотеку с помощью npm

// Импортируем библиотеку Moment.js и сохраняем ее в переменной "moment"
const moment = require('moment');

// Функция для форматирования даты с использованием Moment.js
function formatDate(date, format) {
    // Используем Moment.js для форматирования переданной даты в указанный формат
    return moment(date).format(format);
}

// Функция для добавления дней к дате с использованием Moment.js
function addDays(date, days) {
    // Используем Moment.js для добавления указанного количества дней к переданной дате
    // Метод "add" позволяет добавить дни к дате, а "toDate()" преобразует результат обратно в объект JavaScript Date
    return moment(date).add(days, 'days').toDate();
}

// Экспортируем функции из модуля, чтобы они могли быть доступны в других частях программы, которые подключат этот модуль
module.exports = {
    formatDate,  // Экспортируем функцию formatDate
    addDays,     // Экспортируем функцию addDays
};
