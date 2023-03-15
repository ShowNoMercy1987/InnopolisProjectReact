"use strict";

//Упражнение №1
const arr1 = ['вап', 1, 2, 10, 5];


//Топорная функция (самый удобный метод)
function getSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') continue;
    sum += array[i];
  } return sum;
}
console.log("Сумма =", getSum(arr1));

//Функция с использованием reduce и выполнением условия поиска чисел внутри массива (ничего не экономит и не выигрыват мое мнение)
function getSum(array) {
  return array.reduce( function(acc, curr) {
    if (typeof curr === 'number') {
      acc += curr;
    } return acc;
  }, 0);
  }
  console.log("Сумма =", getSum(arr1));

//Reduce без применения условий
// function getSum(array) {
//   return array.reduce((acc, curett) => acc + curett, 0);
// }
// console.log("Сумма =", getSum(arr1));

//Задание №3
// let cart = [4884];

// const addToCart = (index) => {
//   if(cart.includes(index)) {
//     console.log("Данный элемент уже существует!", index);
//   } else cart.push(index);
// }

// const removeFromCart = (index) => {
//   if(cart.includes(index)) {
//     cart.pop(index);
//   } else console.log("Нет такого элемента!", index);
// }


// addToCart(1111);
// console.log(cart);

// removeFromCart(4884);
// console.log(cart);



let cart = new Set([1111, 3333, 4884, 11121]);

function addToCart(productId) {
if (cart.has(productId)) {
  console.log("Товар уже есть в корзине!") 
}
cart.add(productId)}

function removeFromCart(productId) {
 if (cart.delete(productId)) {

 }
 else console.log("Товара нет в корзине!") 
}

addToCart(1112);
console.log(cart);

 removeFromCart(4888);
 console.log(cart);