'use strict';
// Разработать функцию, изменяющую окончание слов в зависимости от падежа. Например:
// 112 сообщения
// 12 сообщений
// 1 сообщение
// 1024 пользователя
// 1026 пользователей
// 121 пользователь

function declineWordByCases(number, wordForms) {

    // Правила склонения для русского языка
    let cases = [2, 0, 1, 1, 1, 2];
    let index;

    if (number % 100 > 4 && number % 100 < 20) {
        index = 2; // Используем третью форму для чисел, оканчивающихся на 11, 12, 13, 14
    } else {
        index = cases[Math.min(number % 10, 5)]; // Определяем форму окончания по последней цифре числа
    }

    return number + ' ' + wordForms[index];
}


console.log(declineWordByCases(112, ['сообщение', 'сообщения', 'сообщений']));
console.log(declineWordByCases(12, ['сообщение', 'сообщения', 'сообщений']));
console.log(declineWordByCases(1, ['сообщение', 'сообщения', 'сообщений']));
console.log(declineWordByCases(1024, ['пользователь', 'пользователя', 'пользователей']));
console.log(declineWordByCases(1026, ['пользователь', 'пользователя', 'пользователей']));
console.log(declineWordByCases(121, ['пользователь', 'пользователя', 'пользователей'])); 
