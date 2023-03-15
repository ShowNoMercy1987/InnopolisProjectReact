"use strict";

// первое упражнение мой вариант (на данный момент не знаю, как написать проверку для записи типа "авопр123орв123", но запишу позже, как узнаю.)
let a = '$100';
let b = '300$';

let result = Number(a.match(/\d+/g)) + Number(b.match(/\d+/g));

if (typeof result === 'number') {
  console.log("Ваша сумма", result);
} else {
  console.log('Не правильное значение переменных');
}

//первое упражнение вариант по лекции
let a1 = '$100';
let b1 = '300$';

let sum = parseInt(a.slice(1)) + parseInt(b.slice(0, 3));
console.log("Результат сложения", sum)

// второе упражнение
let message = '            превед медвед          ';

message = message.trim();
message = message[0].toUpperCase() + message.slice(1);

console.log(message) //Результат "Превед Медвед"

//третье упражнение
let age = prompt("Сколько вам лет?");

if (age <= 3) {
  alert ("Вы младенец!");
} else if (age <= 11) {
  alert ("Вы ребенок!");
} else if (age <= 18) {
  alert ("Вы подросток!");
} else if (age <= 40) {
  alert ("Вы познаете жизнь!");
} else if (age <= 80) {
  alert ("Вы познали жизнь!");
} else if (age >= 81) {
  alert ("Вы долгожитель!")
} else {
  alert ("Все в порядке можно смотреть!")
}
console.log(age);

//Дополнительное задание мое решение
let message2 = 'Я работаю со строками как профессионал!';

let count = message2.match(/\S+/g) || []; // Ваше решение
console.log(count); // Должно быть 6

//Дополнительное задание, решение с помощью split()
let message3 = 'Я работаю со строками как профессионал!';

let count2 = message3.split(' '); // Ваше решение
console.log(count2); // Должно быть 6
