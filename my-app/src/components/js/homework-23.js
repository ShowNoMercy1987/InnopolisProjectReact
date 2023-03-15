"use strict";

//оставлю себе этот вариант решения (полезное знание)

// const arr1 = ["asd", "10", 1, 2, 10, 5];

// const func = (arr) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const intElem = parseInt(arr[i]);
//     if (!Number.isNaN(intElem)) {
//       newArr.push(intElem);
//     }
//   }

//   return newArr;
// };
// console.log(func(arr1));

// function getSum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] !== "number") continue;
//     sum += array[i];
//   }
//   return sum;
// }
// console.log("Сумма =", getSum(func(arr1)));

// Первое упражнение ДЗ-23 (с проверкой на число)

// let askNum = prompt("Введите число");
// if (askNum != +askNum) {
//   alert("Введено не число!");
// } else {
//   let intervalId = setInterval(() => {
//     askNum = askNum - 1;
//     console.log("Осталось", askNum);
//     if (askNum == 0) {
//       clearInterval(intervalId);
//       alert("Подсчет закончен!");
//     }
//   }, 1000);
// }

// let timer = prompt("Введите число");
// let intervalId = setInterval (() => {
//     timer = timer - 1;
//     if (timer === 0) {
//         clearInterval(intervalId);
//     }
//     console.log("Осталось", timer);
//     if (timer === 0) {
//         console.log("Время вышло");
//     }
// }, 1000);
//     if (timer != +timer) {
//         clearInterval(intervalId);
//         alert("Ошибка, вы ввели не число");
// }

//Первое упражнение ДЗ-23 (через промис)

let askNum = prompt("Введите число");

const promise = new Promise((resolve, reject) => {
  if (askNum != +askNum) {
    reject("Введено не число!")
    return;
  }
  let intervalId = setInterval(() => {
    askNum = askNum - 1;
    console.log("Осталось", askNum);
    if (askNum == 0) {
      clearInterval(intervalId);
      resolve("Время вышло");
    }
  }, 1000);
})

promise
.then((accept) => alert(accept))
.catch((error) => alert(error))

//Второе упражнение ДЗ-23

const promiseObj = fetch("https://reqres.in/api/users");

promiseObj
  .then((response) => response.json())
  .then((json) => {
    let time = performance.now();
    console.log(json.data);

    console.log(`Получили пользователей ${json.data.length}`);

    //console.log(json);

    json.data.forEach((user) => {
      //console.log(user.first_name, user.last_name, user.email);
      console.log(`${user.first_name} ${user.last_name} / ${user.email}`);
    });

    time = performance.now() - time;
    console.log(`Время выполнения = ${time} секунд`);
  })

  .catch(function () {
    console.log("Кажется бэкенд сломался :(");
  });