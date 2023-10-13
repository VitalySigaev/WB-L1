'use strict';
// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

function customJsonParse(jsonString) {
    let index = 0; // Индекс текущего символа в строке JSON.

    function parseValue() {
        const char = jsonString[index]; // Получаем текущий символ.
        if (char === '{') {
            return parseObject(); // Если символ - открывающая фигурная скобка, вызываем функцию для разбора объекта.
        } else if (char === '[') {
            return parseArray(); // Если символ - открывающая квадратная скобка, вызываем функцию для разбора массива.
        } else if (char === '"') {
            return parseString(); // Если символ - открывающая кавычка, вызываем функцию для разбора строки.
        } else if (char === 't') {
            return parseTrue(); // Если символ - "t", вызываем функцию для разбора значения true.
        } else if (char === 'f') {
            return parseFalse(); // Если символ - "f", вызываем функцию для разбора значения false.
        } else if (char === 'n') {
            return parseNull(); // Если символ - "n", вызываем функцию для разбора значения null.
        } else if (char === '-' || (char >= '0' && char <= '9')) {
            return parseNumber(); // Если символ - минус или цифра, вызываем функцию для разбора числа.
        } else {
            throw new Error(`Недопустимый символ: ${char}`); // Иначе, бросаем ошибку для недопустимого символа.
        }
    }

    function parseObject() {
        const obj = {}; // Создаем объект.
        index++; // Пропускаем открывающую фигурную скобку.
        while (jsonString[index] !== '}') { // Пока не встретим закрывающую фигурную скобку.
            const key = parseString(); // Парсим ключ (строку).
            index++; // Пропускаем двоеточие.
            const value = parseValue(); // Парсим значение.
            obj[key] = value; // Добавляем ключ и значение в объект.
            if (jsonString[index] === ',') {
                index++; // Пропускаем запятую, если есть следующая пара ключ-значение.
            }
        }
        index++; // Пропускаем закрывающую фигурную скобку.
        return obj; // Возвращаем объект.
    }

    function parseArray() {
        const arr = []; // Создаем массив.
        index++; // Пропускаем открывающую квадратную скобку.
        while (jsonString[index] !== ']') { // Пока не встретим закрывающую квадратную скобку.
            const value = parseValue(); // Парсим значение.
            arr.push(value); // Добавляем значение в массив.
            if (jsonString[index] === ',') {
                index++; // Пропускаем запятую, если есть следующее значение.
            }
        }
        index++; // Пропускаем закрывающую квадратную скобку.
        return arr; // Возвращаем массив.
    }

    function parseString() {
        let result = ''; // Инициализируем строку-результат.
        index++; // Пропускаем открывающую кавычку.
        while (jsonString[index] !== '"') { // Пока не встретим закрывающую кавычку.
            result += jsonString[index]; // Добавляем текущий символ к строке-результату.
            index++;
        }
        index++; // Пропускаем закрывающую кавычку.
        return result; // Возвращаем строку-результат.
    }

    function parseTrue() {
        const trueStr = jsonString.substr(index, 4); // Получаем подстроку с "true".
        if (trueStr === 'true') {
            index += 4; // Пропускаем "true".
            return true; // Возвращаем true.
        } else {
            throw new Error('Недопустимое значение true'); // Бросаем ошибку для недопустимого значения true.
        }
    }

    function parseFalse() {
        const falseStr = jsonString.substr(index, 5); // Получаем подстроку с "false".
        if (falseStr === 'false') {
            index += 5; // Пропускаем "false".
            return false; // Возвращаем false.
        } else {
            throw new Error('Недопустимое значение false'); // Бросаем ошибку для недопустимого значения false.
        }
    }

    function parseNull() {
        const nullStr = jsonString.substr(index, 4); // Получаем подстроку с "null".
        if (nullStr === 'null') {
            index += 4; // Пропускаем "null".
            return null; // Возвращаем null.
        } else {
            throw new Error('Недопустимое значение null'); // Бросаем ошибку для недопустимого значения null.
        }
    }

    function parseNumber() {
        let numStr = ''; // Инициализируем строку для числа.
        while (
            jsonString[index] === '-' ||
            jsonString[index] === '.' ||
            (jsonString[index] >= '0' && jsonString[index] <= '9') ||
            jsonString[index] === 'e' ||
            jsonString[index] === 'E'
        ) { // Пока текущий символ является частью числа.
            numStr += jsonString[index]; // Добавляем текущий символ к строке для числа.
            index++;
        }
        const num = parseFloat(numStr); // Преобразуем строку в число.
        if (!isNaN(num)) {
            return num; // Возвращаем число.
        } else {
            throw new Error('Недопустимое числовое значение'); // Бросаем ошибку для недопустимого числа.
        }
    }

    try {
        const result = parseValue(); // Парсим корневое значение JSON.
        // Проверка на остаток символов после парсинга
        while (jsonString[index] === ' ' || jsonString[index] === '\n' || jsonString[index] === '\t' || jsonString[index] === '\r') {
            index++; // Пропускаем пробельные символы, если есть.
        }
        if (index !== jsonString.length) {
            throw new Error('Недопустимые символы после JSON'); // Бросаем ошибку, если после JSON остались недопустимые символы.
        }
        return result; // Возвращаем результат парсинга.
    } catch (error) {
        throw new Error(`Ошибка при разборе JSON: ${error.message}`); // Бросаем ошибку при любой ошибке разбора JSON.
    }
}

// Пример использования
const jsonString = '{"name":"John","age":30}';
try {
    const jsonObject = customJsonParse(jsonString); // Вызываем функцию для парсинга JSON.
    console.log(jsonObject); // Выводим результат разбора.
} catch (error) {
    console.error(error.message); // Обрабатываем ошибки, если есть.
}
