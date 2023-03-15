"use strict";

//Первое задание
for (let a = 0; a <= 20; a = a + 2) {
  console.log(a);
}

//Второе задание
let sum = 0;
for (let i = 1; i <= 3; i++) {
  let value = +prompt("Введите число");
  if (!value) alert("Ошибка, выввели не число");
  if (!value) break;
  if (i === 4) break;
  sum += value;
}
alert("сумма: " + sum);

//Третье задание


//let askMonth = prompt("Введите месяц");

let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let getNameOfMonth = (index) => month[index];

for (let i = 0; i < 12; i++)  {
  if (i !== 9) {
  console.log(month[i]);
  }
}

console.log(getNameOfMonth(1));

//Дополнительнео задание
//Что такоеIIFE

//Ответ (Immediately Invoked Function Expression) это JavaScript функция, которая выполняется сразу же после того, как она была определена.

//Вариант 1
//(function() {
//  alert("I am an IIFE!");
//}());

//Вариант 2
//(function() {
//  alert("I am an IIFE, too!");
//})();