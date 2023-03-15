"use strict";
//--------------------------Переменные------------------------//
let reviewForm = document.getElementById("review-form");

let inputName = document.getElementById("name");
let inputStars = document.getElementById("stars");
let inputText = document.getElementById("text");

let errName = document.getElementById("err-name");
let errStars = document.getElementById("err-stars");

//----------------------------Скрытие ошибки------------------------//
const inputListenerName = (e) => {
  errName.classList.remove("vision-on");
  inputName.classList.remove("err-border");
};

const inputListenerStars = (e) => {
  errStars.classList.remove("vision-on");
  inputStars.classList.remove("err-border");
};

inputName.addEventListener("input", inputListenerName);
inputStars.addEventListener("input", inputListenerStars);

//----------------Отслеживание введенного в инпуты--------------------//
inputName.oninput = function () {
  let onInput = inputName.value;
  localStorage.setItem("onInput", onInput);
};

inputStars.oninput = function () {
  let onStars = inputStars.value;
  localStorage.setItem("onStars", onStars);
};

inputText.oninput = function () {
  let onText = inputText.value;
  localStorage.setItem("onText", onText);
};

//---------------------Возвращение введенных данных-------------------//
inputName.value = localStorage.getItem("onInput");
inputStars.value = localStorage.getItem("onStars");
inputText.value = localStorage.getItem("onText");



//------------------------------Валидация формы----------------------//
class Form {
  constructor(reviewForm, inputName, inputStars, inputText, errName, errStars) {
    this.reviewForm = reviewForm;
    this.inputName = inputName;
    this.inputStars = inputStars;
    this.inputText = inputText;
    this.errName = errName;
    this.errStars = errStars;
  }

  validate(event) {
    event.preventDefault();

    let isError = false;

    if (
      errName.classList.contains("vision-on") ||
      errStars.classList.contains("vision-on")
    ) {
      isError = true;
    }

    if (isError) {
      return;
    }

    //--------------------Валидность введения имени
    if (inputName.value.trim().length < 3 || inputName.value.trim() == "") {
      errName.classList.add("vision-on");
      errName.children[0].innerHTML = "Вы забыли указать имя!";
      inputName.classList.add("err-border");
      isError = true;
      return;
    }

    //--------------------Валидность длинны имени
    if (inputName.value.trim().length > 13) {
      errName.classList.add("vision-on");
      errName.children[0].innerHTML = "Длинна имени не более, чем 13 символов!";
      inputName.classList.add("err-border");
      isError = true;
      return;
    }

    //--------------------Валидность рейтинга
    if (
      inputStars.value.trim() <= 0 ||
      inputStars.value.trim() > 5 ||
      inputStars.value.trim() == "" ||
      Number(inputStars.value.trim()) != +inputStars.value.trim()
    ) {
      errStars.classList.add("vision-on");
      inputStars.classList.add("err-border");
      return;
    }

    //--------------------Сохранение введенных данных в инпуты
    let userName = inputName.value;
    let userRev = inputStars.value;
    let userText = inputText.value;

    let userReview = JSON.stringify([
      `name: ${userName}`,
      `rev: ${userRev}`,
      `text: ${userText}`,
    ]);
  

    if (!isError) {
      reviewForm.reset();
      localStorage.removeItem("onInput");
      localStorage.removeItem("onStars");
      localStorage.removeItem("onText");
      localStorage.setItem("отзыв", userReview);
      console.log("success");
    }
  }
}

let onSubmit = new Form();
reviewForm.addEventListener("submit", onSubmit.validate);
//------------------------------------------------------------------//