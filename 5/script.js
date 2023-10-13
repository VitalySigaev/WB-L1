// Разработайте функцию преобразования JSON в связный список. На входе функция должна получать JSON, содержащий список объектов, на выходе объект, представляющий из себя односвязный список.

// За основу взята информация с ютуб-канала Front-end science

let arr = [
    { name: 'John', age: 29 },
    { name: 'Ivan', age: 8 },
    { name: 'Adam', age: 50 },
    { name: 'Will', age: 31 },
    { name: 'Joe', age: 8 },
    { name: 'Vlad', age: 100 }
]

const json = JSON.stringify(arr);
// Создали класс для каждой node(узла, элемента)(у него есть value и next(ссылка на следующий элемент))
class LinkedListNode {
    // 
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Создали класс для списка
class LinkedList {
    // heade - ссылка на первый элемент(по умолчанию null). tail - на последний
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Метод, добавляющий ссылку на элемент в конец списка
    append(value) {
        const newNode = new LinkedListNode(value);
        // Условие : если head или tail в списке нет, то мы их устанавливаем(если не было элементов до этого)
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }
        // Когда в списке добавляем элементы то, меняем ссылку на последний элемент(меняем null на ссылку на новый элемент)
        this.tail.next = newNode;

        this.tail = newNode;

        return this;
    }
    getList = () => {
        return this.head;
    }
}
// Конвертируем json в односвязный список
function convertJsonToLinkedList(json) {
    //Превращаем json в массив объектов 
    const list = JSON.parse(json);
    // создаем список
    const linkedList = new LinkedList();
    if (!(Array.isArray(list) || list.length === 0)) return 'Получен либо пустой массив, либо не массив'
    // перебираем массив и добавляем элементы в список
    list.forEach(obj => {
        linkedList.append(obj)
    });
    // возвращаем головной объект с ссылками на следующие элементы
    return linkedList.getList();
}

console.log(convertJsonToLinkedList(json));


