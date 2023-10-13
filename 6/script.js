'use strict';
// Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. Напишите код, который сортирует этот массив по возрастанию возраста, а при равных возрастах сортирует по алфавиту по полю name.
let arr = [
    { name: 'John', age: 29 },
    { name: 'Ivan', age: 8 },
    { name: 'Adam', age: 50 },
    { name: 'Will', age: 31 },
    { name: 'Joe', age: 8 },
    { name: 'Vlad', age: 100 }
]


console.log(arr.sort((a, b) => {
    // Сначала сравниваем возраст
    if (a.age !== b.age) {
        // Сортируем по возрасту от меньшего к большему
        return a.age - b.age;
    }

    // Если возрасты равны, сравниваем по полю name (по алфавиту)
    return a.name.localeCompare(b.name);
}));
