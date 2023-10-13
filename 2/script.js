"use strict";
// Задача о странных числах: Напишите функцию, которая принимает число и возвращает true, если это число является странным, и false в противном случае. Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.
function isStrangeNumber(num) {
    if (num <= 0) {
        return false; // Отрицательные числа и ноль не считаются странными.
    }

    let sumOfDivisors = 0;

    // Перебираем все числа от 1 до (num - 1) и находим делители числа num.
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sumOfDivisors += i;
        }
    }

    // Сравниваем сумму делителей с числом.
    return sumOfDivisors === num;
}

// Примеры использования:
console.log(isStrangeNumber(6)); 
console.log(isStrangeNumber(12)); 
console.log(isStrangeNumber(28)); 