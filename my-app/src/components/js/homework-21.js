"use strict";

//мое решение третьего упражения дз-20 (изначально пошел именно в эту сторону, но немного не так начал писать цикл, т.е. половину сделал сам)

function getNameOfMonth(m) {
  if (m === 0) return "Январь";
  if (m === 1) return "Февраль";
  if (m === 2) return "Март";
  if (m === 3) return "Апрель";
  if (m === 4) return "Май";
  if (m === 5) return "Июнь";
  if (m === 6) return "Июль";
  if (m === 7) return "Август";
  if (m === 8) return "Сенбярь";
  if (m === 9) return "Октябрь";
  if (m === 10) return "Ноябрь";
  if (m === 11) return "Декабрь";
}

for (let m = 0; m <= 11; m++) {
  if (m === 9) continue;
  console.log(getNameOfMonth(m));
}
console.log(getNameOfMonth(0));

//Первое задание ДЗ-21
let user = {
  name: "Vasya",
};

/**
 * Проверяет пустой ли объект внутри
 * @returns //true пустой объект, false не пустой
 */
function isEmpty(obj) {
  for (let key in obj) {
    return false
  } return true
}
alert(isEmpty(user)); // false

// let user = {
//   name: "Vasya",
// };
  
// function isEmpty(obj) {
//   return Object.keys(obj).length === 0? true : false;
// }
// console.log(isEmpty(user));

//Третье задание ДЗ-21
let salaries = {
  John: 100000,
  Ann: 160000,
  Pete: 130000,
}

let perzent = 0;

/** Принимает % из переменной perzent в виде числа и увеличивает ключи внутри объекта на этот %.
 * Возвращает новый объект.
 * @param {Number}
 * @returns 
 */
function raiseSalary(perzent) {
  const newSalaries = {}
  for (let key in salaries) {
    newSalaries[key] = Math.round(Number(salaries[key]) + Number((salaries[key] / 100) * perzent));
  } return newSalaries;
}
console.log(raiseSalary(perzent));

const objNewSalaries = raiseSalary(perzent);

/**
 * Принимает объект из функции raiseSalary и суммирует все ключи
 */
function sumSalaries(objNewSalaries) {
  let sum =0;
  for (let key of Object.values(objNewSalaries)) {
    sum += key;
  } return sum;
}
console.log("Первый вариант вывода суммы", sumSalaries(objNewSalaries));

function sumSalaries2(objNewSalaries) {
  return Object.values(objNewSalaries).reduce((a, b) => a + b, 0);
}
console.log("Второй вариант вывода суммы", sumSalaries(objNewSalaries));