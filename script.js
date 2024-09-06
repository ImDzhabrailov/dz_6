//Получить узел html

let html = document.firstChild;
console.log(html)

//Поменять фоновый цвет всего документа на синий

// let styleHtml = document.firstChild;
// styleHtml.style.backgroundColor = "blue";
// console.log(styleHtml);

//Пользуясь узлом document.body получить узлы <b> и <i>.

// let b = document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
// console.log(b);
// let i = document.body.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
// console.log(i);

//Поменять текст в обоих узлах

// let b = document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild;
// b.textContent = "Новый текст первого узла";
// console.log(b);
// let i = document.body.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
// i.textContent = "Новый текст второго узла";
// console.log(i);

//Задайте тегу <b> класс bold, а тегу <i> класс cursive

// let b = document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
// b.className = "bold";
// console.log(b);
// let i = document.body.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
// i.className = "cursive";
// console.log(i);

//Получить текстовый узел Линкод находящийся внутри тега <title>, и поменять его на 'Lincode’.

// let title = document.head.firstChild.nextSibling.firstChild;
// title.textContent = "Lincode";
// console.log(title);

//Удалить узел <b>**

// let b = document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
// let parent = b.parentNode;
// parent.removeChild(b);
// //доп от меня
// b.textContent = "Этот тег уже удален!"
// console.log(b);

//Домашка по Promise

//1
// function getRandomNumber(min, max) {
//     return new Promise((resolve, reject) => {
//         const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//         if (randomNumber < 10) {
//             resolve(randomNumber)
//         } else {
//             reject(console.log("ERROR"))
//         }
//     });
// }
// getRandomNumber(0, 15) //Диапазон сделал таким, чтоб иногда срабатывал и reject
//     .then((number) => {
//         console.log("Случайное число:", number);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });

//2
// function checkNumber(num) {
//     return new Promise((resolve, reject) => {
//         if (num < 10) {
//             resolve("Успех!");
//         } else {
//             reject("Ошибка!");
//         }
//     });
// }
// checkNumber(5) //Число для вывода успешного ответа
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

//Задание 1: Создание простого Promise

// const resolvePromise = new Promise((resolve) => {
//     resolve("Промис успешно выполнен!");
// });

// resolvePromise
//     .then((message) => {
//         console.log(message); // Вывод: Промис успешно выполнен!
//     })
//     .catch((error) => {
//         console.error(error);
//     });

//Задание 2: Использование setTimeout с Promise

// const asyncOperation = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true; // Измениь на false, чтобы протестировать reject

//             if (success) {
//                 resolve("Асинхронная операция успешно завершена!");
//             } else {
//                 reject("Произошла ошибка при выполнении операции.");
//             }
//         }, 2000);
//     });
// };
// asyncOperation()
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

//Задание 3: Использование Promise.all

// const promise1 = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Результат первого Promise (1 секунда)");
//         }, 1000);
//     });
// };
// const promise2 = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Результат второго Promise (3 секунды)");
//         }, 3000);
//     });
// };
// Promise.all([promise1(), promise2()])
//     .then((results) => {
//         console.log(results);
//     })
//     .catch((error) => {
//         console.error("Ошибка:", error);
//     });

//Задание 4: Использование Promise.race

// const promise1 = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Результат первого Promise (1 секунда)");
//         }, 1000);
//     });
// };
// const promise2 = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Результат второго Promise (3 секунды)");
//         }, 3000);
//     });
// };
// Promise.race([promise1(), promise2()])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error("Ошибка:", error);
//     });

//Деструктуризация
//Задание 1: Деструктуризация массива

// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);

//Задание 2: Деструктуризация объекта

// const person = {
//     name: 'Johny',
//     age: 36,
//     city: 'Grozny'
// };
// const { name, age, city } = person;
// console.log(name);
// console.log(age);
// console.log(city);

//Задание 3: Деструктуризация с использованием оставшихся элементов (rest)

// const letters = ['a', 'b', 'c', 'd', 'e'];
// const [first, second, ...rest] = letters;
// console.log(first);
// console.log(second);
// console.log(rest);

//Задание 4: Вложенная деструктуризация

// const student = {
//     name: 'Johny',
//     age: 36,
//     address: {
//         city: 'Grozny',
//         country: 'Russia'
//     }
// };
// const { name, age, address: { city, country } } = student;
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(country);