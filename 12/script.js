'use strict'
// Задача на работу с объектами: создайте объект, представляющий собой книгу. Объект должен иметь свойства, такие как: название книги, автор и год издания. Напишите методы для получения и изменения значений свойств книги.

// Создал класс для создания объектов(книги) и методы для получения и изменения свойств(название,автор,год публикации)
class Book {
    constructor(name, author, yearOfPublic) {
        this.name = name;
        this.author = author;
        this.yearOfPublic = yearOfPublic;
    }
    getName() {
        return `Название: ${this.name}`
    }
    getAuthor() {
        return `Автор: ${this.author}`
    }
    getyearOfPublic() {
        return `Год публикации: ${this.yearOfPublic}`
    }
    getInfo() {
        return `Название книги: ${this.name}, автор: ${this.author}, год издания: ${this.yearOfPublic} `
    }
    setName(name) {
        this.name = name;
    }
    setAuthor(author) {
        this.author = author;
    }
    setYearOfPublic(yearOfPublic) {
        this.yearOfPublic = yearOfPublic;
    }
    setInfo(name, value, yearOfPublic) {
        this.name = name;
        this.value = value;
        this.yearOfPublic = yearOfPublic;
    }
}
// Пример использования

let triumph = new Book('Триумфальная арка', 'Эрих Мария Ремарк', 1945);
console.log(triumph.getInfo());
triumph.setName('Искра жизни');
triumph.setYearOfPublic(1952);
console.log(triumph.getInfo());


// Создал объект с нужными параметрами
let book = {
    name: 'Три товарища',
    author: 'Эрих Мария Ремарк',
    yearOfPublic: 1936,
    // Написал метод для получение параметром книги
    getName() {
        return `Название: ${this.name}`
    },
    getAuthor() {
        return `Автор: ${this.author}`
    },
    getyearOfPublic() {
        return `Год публикации: ${this.yearOfPublic}`
    },
    getInfo() {
        return `Название книги: ${this.name}, автор: ${this.author}, год издания: ${this.yearOfPublic} `
    },
    // Написал методы для изменения параметров книги
    setName(name) {
        this.name = name;
    },
    setAuthor(author) {
        this.author = author;
    },
    setYearOfPublic() {
        this.yearOfPublic = this.yearOfPublic;
    },
    setInfo(name, value, yearOfPublic) {
        this.name = name;
        this.value = value;
        this.yearOfPublic = yearOfPublic;
    }
}
console.log(book.getName());
console.log(book.getAuthor());
console.log(book.getyearOfPublic());
console.log(book.getInfo());
book.setInfo('Норвежский лес', 'Харуки Мураками', 1987);
console.log(book.getInfo());