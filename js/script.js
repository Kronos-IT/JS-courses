"use strict";

// practice Methods


// end practice Methods

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {

//     },
//     actors: {

//     },
//     genres: [],
//     privat: false
// };



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// // rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log(' Просмотренно довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// // detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }

// writeYourGenres();
//  Methods


// const parce = "Привет мой юнный друг";

// console.log(parce.slice(11, 20));

// end Methods


// function
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 20;
// }


// showFirstMessage('Hellow World!');

// end fuction

// Practise for and while

// // 1)
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// // 2)

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {

//     },
//     actors: {

//     },
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }


// if (personalMovieDB.count < 10) {
//     console.log(' Просмотренно довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }


// console.log(personalMovieDB);

// let i = 0;

// do {
//     i++;
// }

// while (i < 2); {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }


// end Practise


// Циклы

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i == 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }

// end Циклы


// Условия


// if (4 == 9) {
//     console.log("Ok");
// } else {
//     console.log('Error');
// }




// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много')
// } else {
//     console.log('Ok!')
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 51:
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }
// end Условия

// 1)
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// // 2)

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {

//     },
//     actors: {

//     },
//     genres: [],
//     privat: false
// };
// // 3)
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



// Операторы js

// Логические операторы и, или && ||

// const isChecked = false,
//     isClose = false;

// console.log(isChecked || !isClose);

// Инкремент и декримент
// console.log('arr' + " - object");
// console.log(4 + "5");

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(incr++);
// console.log(decr--);




// Интерполяция

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';

// alert(`Привет, ${user}`);

// Запись данных в массив

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof (answers));

// const result = confirm("Do you want an apple?"); ок или отмена т.е. (true or false)
// console.log(result);

// const answer = prompt("Вам есть 18?", "18"); можно ввести любой ответ
// console.log(typeof (answer));
// alert('hello');

// let number = 4.6;

// const persone = "Alex";

// const bool = true;

// let und;

// console.log(und);


// // Объёкты

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);


// // Массив - это частный случай объекта

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[3]);

// console.log(-4/0); в результате будет - infinity
// console.log('string' * 9); результатом будет NaN ( не число )

// Переменные

//  let number = 5; переменная let
// const leftBorderWidth = 1; константа, но её можно изменить!!!

// number = 10;
// console.log(number);

// const obj = { с помощью этого метода, можно изменить константу
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name);
// var name = 'Ivan'; var в строгом режиме использовать нельзя!

// {
//     var result = 50;
// }

// console.log(result);

