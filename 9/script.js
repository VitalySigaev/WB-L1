'use strict';
// Реализовать функцию конвертации JSON в строку

function customStringify(obj) {
    // Проверка на undefined, функции и символы
    if (typeof obj === 'undefined' || typeof obj === 'function' || typeof obj === 'symbol') {
        return undefined;
    }

    // Обработка случая, когда obj равен null
    if (obj === null) {
        return 'null';
    }

    // Обработка случая, когда obj является строкой
    if (typeof obj === 'string') {
        return `"${obj}"`; // Строки в JSON обрамляются в двойные кавычки
    }

    // Обработка случая, когда obj является числом или булевым значением
    if (typeof obj === 'number' || typeof obj === 'boolean') {
        return obj.toString(); // Просто преобразуем числа и булевы значения в строки
    }

    // Обработка случая, когда obj является массивом
    if (Array.isArray(obj)) {
        // Мы преобразуем каждый элемент массива, вызывая customStringify рекурсивно
        const items = obj.map(item => customStringify(item));
        // Затем объединяем элементы массива в строку JSON с помощью запятых
        return `[${items.join(',')}]`;
    }

    // Обработка случая, когда obj является объектом
    if (typeof obj === 'object') {
        const properties = [];
        // Итерируемся по свойствам объекта
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                // Рекурсивно преобразуем значение свойства в строку JSON
                const value = customStringify(obj[key]);
                // Если значение определено (не undefined), то добавляем пару "ключ:значение" в массив properties
                if (value !== undefined) {
                    properties.push(`"${key}":${value}`);
                }
            }
        }
        // Затем объединяем все свойства объекта в строку JSON с помощью запятых
        return `{${properties.join(',')}}`;
    }

    // Если ни одно из условий не сработало, возвращаем undefined
    return undefined;
}
const data = {
    name: "John",
    age: 30,
    city: "New York",
    isStudent: false,
    grades: [85, 92, 78],
    address: {
        street: "123 Main St",
        house: 15
    }
};

const jsonString = customStringify(data);

console.log(jsonString);