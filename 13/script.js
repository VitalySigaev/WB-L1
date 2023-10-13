'use strict';
// Задача на классы и наследование: создайте базовый класс Shape (фигура), который имеет методы для расчета площади и периметра. Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и треугольник. Реализуйте методы расчета площади и периметра для каждой фигуры.

// Базовый класс Shape
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('Выдуманный клсс');
        }
    }

    // Метод для расчета площади (подклассы должны переопределить этот метод)
    calculateArea() {
        throw new Error('Переопределяемый метод');
    }

    // Метод для расчета периметра (подклассы должны переопределить этот метод)
    calculatePerimeter() {
        throw new Error('Переопределяемый метод');
    }
}

// Подкласс Rectangle (прямоугольник)
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    // Реализация метода для расчета площади прямоугольника
    calculateArea() {
        return this.width * this.height;
    }

    // Реализация метода для расчета периметра прямоугольника
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Подкласс Circle (круг)
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    // Реализация метода для расчета площади круга
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }

    // Реализация метода для расчета периметра круга (периметр не применим к кругу)
    calculatePerimeter() {
        throw new Error('Circle has no perimeter.');
    }
}

// Подкласс Triangle (треугольник)
class Triangle extends Shape {
    constructor(sideA, sideB, sideC) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    // Реализация метода для расчета площади треугольника по формуле Герона
    calculateArea() {
        const s = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }

    // Реализация метода для расчета периметра треугольника
    calculatePerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
}

// Пример использования классов
const rectangle = new Rectangle(5, 10);
console.log('Площадь прямоугольника:', rectangle.calculateArea());
console.log('Периметр прямоугольника:', rectangle.calculatePerimeter());

const circle = new Circle(7);
console.log('Площадь круга:', circle.calculateArea());

const triangle = new Triangle(3, 4, 5);
console.log('Площадь треугольника:', triangle.calculateArea());
console.log('Периметр треугольника:', triangle.calculatePerimeter());
