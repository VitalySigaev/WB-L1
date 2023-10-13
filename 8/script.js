"use strict";
// Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию, которая вызывает каждую функцию в этом массиве и возвращает массив результатов, полученных после вызова каждой функции.

// Создаем функцию которая принимает массив функций и возвращает функцию
function createClosureFunction(functions) {
    return function () {
        // Эта функция записывает результаты вызова функций в массив и возвращает его
        const results = [];
        for (const func of functions) {
            results.push(func());
        }
        return results;
    };
}

// Создаем массив функций
const func1 = () => 1;
const func2 = () => 2;
const func3 = () => 3;

const arrayOfFunctions = [func1, func2, func3];

const combinedFunction = createClosureFunction(arrayOfFunctions);
// Вызов анонимной функции, которую возвращает функций createClosureFunction, для получения массива результатов
const resultsArray = combinedFunction();

console.log(resultsArray); 