"use strict";

let heart = document.querySelector(".price__like");
let heartLike = document.querySelector(".price__hover");
let likeList = document.querySelector(".header__fav");
let likeOn = document.querySelector(".header__like-list");
let inList = document.querySelector(".header__like-added");
let countNum = document.querySelector(".header__fav-icon");
let count = document.querySelector(".header__number-fav");

//------------------Кнопка избранное-----------------------//
likeList.addEventListener("click", () => {
  likeOn.classList.toggle("header__like-list_on");
});

//-----------скрывание избранного по клику-----------------//
document.addEventListener("click", (e) => {
  const click3 = e.composedPath().includes(likeOn);
  const click4 = e.composedPath().includes(likeList);

  if (!click3 && !click4) {
    likeOn.classList.remove("header__like-list_on");
  }
});

//------------Добавление в избранное-----------------------//
let favArr = [];
// console.log(favArr.length);
let zero = localStorage.setItem("start", 0);
let zeroCount = +localStorage.getItem("zero");
// console.log(zeroCount);

heart.addEventListener("click", () => {
  heartLike.classList.toggle("like-on");

  let likeArr = ["iPhone13pro"];
  let setArr = JSON.stringify([`${likeArr[0]}`]);
  localStorage.setItem(["like"], setArr);

  if (heartLike.classList.contains("like-on")) {
    favArr.push(`${likeArr}`);
    countNum.classList.add("header__fav-icon_off");
    zeroCount++;
    count.innerHTML = zeroCount;
    inList.innerHTML = `${likeArr} 
    <button class="btn-for-like">Убрать</button>`;
    console.log("added to massive");
    return;
  } else {
    console.log("в local storage empty");
    countNum.classList.remove("header__fav-icon_off");
    inList.innerHTML = '';
    zeroCount--;
  }

  if (!heartLike.classList.contains("like-on")) {
    localStorage.removeItem("like");
  }
});

//------------выбор цвета------------------//
let colors = document.querySelectorAll('.colors-box__btn');

colors.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    colors.forEach((item) => {
        item.classList.remove('selected-color');
    });
    btn.classList.add('selected-color')
  })
})

//-----------------Выбор памяти-------------------//
let memory = document.querySelectorAll('.memory__gray-button');

memory.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        memory.forEach((item) => {
            item.classList.remove('memory__gray-button_selected-color');
        });
        btn.classList.add('memory__gray-button_selected-color')
    })
});

//--------------------Добавить в корзину------------------//
let buy = document.getElementById('buy');
// localStorage.setItem('buy_set', 0);
let buy_get = +localStorage.getItem("buy_set");
console.log(buy_get)

let cartNum = document.querySelector('.header__number-buy');
let countOn = document.querySelector('.header__buy-icon');

buy.addEventListener('click', (add_cart));
buy.addEventListener('click', (cartCount));

function add_cart () {
  if (buy_get == 0) {
    buy.style.background = '#888888';
    buy.style.border = '#888888';
    buy.innerHTML = 'Товар уже в корзине'
    buy_get++
    localStorage.setItem('buy_set', buy_get)
    console.log(buy_get)
    return
  }
  else {
    buy_get--;
    buy.style.background = '#f36223';
    buy.style.border = '#f36223';
    buy.innerHTML = 'Добавить в корзину'
    localStorage.setItem('buy_set', buy_get)
    console.log(buy_get)
  }
}

const getSaved = (e) => {
  if (e == 0) {
    return
  } else {
    buy.style.background = '#888888';
    buy.style.border = '#888888';
    buy.innerHTML = 'Товар уже в корзине'
  }
}
getSaved(buy_get);

function cartCount() {
  if (buy_get == 0) {
    cartNum.innerHTML = buy_get;
    cartNum.style.visibility = '';
    countOn.style.visibility = '';
    return
  }
  else { 
    cartNum.style.visibility = 'visible';
    countOn.style.visibility = 'visible';
    cartNum.innerHTML = buy_get;
    return
  }
}
cartCount()