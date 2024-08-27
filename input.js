let name = prompt("Введите ваше имя:");
let spaceId = prompt("Введите ваш ID:");
let spacePassword = prompt("Введите ваш пароль:");

// Создаем объект
let userObject = {
    name: name,
    ID: spaceId,
    password: spacePassword
};

// Выводим объект в консоль
console.log(userObject);