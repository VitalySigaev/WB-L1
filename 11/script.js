'use strict';
// Задача о замыканиях и области видимости: напишите функцию, которая возвращает другую функцию. Внутренняя функция должна иметь доступ к  переменной, определенной во внешней функции, даже после того, как внешняя функция завершила свое выполнение.

// Создал функцию, которая возвращает функцию, которая меняет значение переменной из внешней функции и возращает его
function closure() {
    let num = 1;
    return function () {
        return num + 1;
    }
}
console.log(closure()());