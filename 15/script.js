'use strict';
// Задача на асинхронность: напишите асинхронную функцию, которая использует ключевое слово await для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.

async function performAsyncTask() {

    // Ожидание выполнения асинхронной операции с помощью await
    const result1 = await someAsyncFunction1();
    const result2 = await someAsyncFunction2();

    // Здесь можно использовать результаты операций
    console.log('Результат 1:', result1);
    console.log('Результат 2:', result2);

    // Вернуть результат или что-то ещё
    return 'Завершено!';
}

// Примеры асинхронных функций, которые можно использовать в performAsyncTask
async function someAsyncFunction1() {
    return 'Результат асинхронной функции 1';
}

async function someAsyncFunction2() {
    return 'Результат асинхронной функции 2';
}


// Вызываем асинхронную функцию
performAsyncTask();
