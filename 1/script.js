"use strict";
// Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом. Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра »).

function isPalindrom(str) {
    // Приводим к нижнему регистру и удаляем все пробелы
    str = str.toLowerCase().replace(/ /g, '');
    // Разбиваем строку на массив символов, реверсируем, соединяем обратно в строку и присваемаем переменой
    let palidrom = str.split("").reverse().join("");
    // Строго проверяем палидром или нет
    return str === palidrom;
}

console.log(isPalindrom('аргентина манит негра'));



// Функция для удаления пробелов(создали переменную куда вносим символы без пробела, перебор через цикл и условие: если символ не пробел, то добавляем)
function removeSpaces(str) {
    let stringWithoutSpaces = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            stringWithoutSpaces += str[i];
        }
    }
    return stringWithoutSpaces;
}

let inputString = "аргентина манит негра";
let stringWithoutSpaces = removeSpaces(inputString);

if (stringWithoutSpaces === stringWithoutSpaces.split('').reverse().join('')) {
    console.log("Строка является палиндромом.");
} else {
    console.log("Строка не является палиндромом.");
}




function isPalindrome(str) {
    // Удаляем пробелы и приводим к нижнему регистру
    let stringWithoutSpaces = str.toLowerCase().split('').filter(char => char !== ' ').join('');

    // Создаем обратную строку
    let reversedStr = stringWithoutSpaces.split('').reverse().join('');

    // Сравниваем исходную строку с обратной
    return stringWithoutSpaces === reversedStr;
}
console.log(isPalindrome('аргентина манит негра'));