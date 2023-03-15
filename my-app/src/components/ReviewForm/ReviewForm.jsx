import "./ReviewForm.css";
import { useState, useEffect } from "react";
import React from "react";


function Form() {

  const [name, setName] = useState("");
  const [stars, setStars] = useState("");
  const [text, setText] = useState("");

  const errorValue = { name: null, stars: null };
  const [errValue, setErrValue] = useState({ ...errorValue })
 
  const handleFocusName = (event) => { setErrValue({ ...errorValue }) };
  const handleFocusStars = (event) => { setErrValue({ ...errorValue }) };


  const handleName = (e) => {
    setName(e.target.value);
    localStorage.setItem("nameField", e.target.value);
  };

  const handleStars = (e) => {
    setStars(e.target.value);
    localStorage.setItem("starsField", e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
    localStorage.setItem("textField", e.target.value);
  };

  useEffect(() => {
    const getName = localStorage.getItem("nameField");
    const getStars = localStorage.getItem("starsField");
    const getText = localStorage.getItem("textField");

    if (setName.length !== "") {
      setName(getName);
    }

    if (setStars.length !== "") {
      setStars(getStars);
    }

    if (setText.length !== "") {
      setText(getText);
    }
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    const errorObj = {};

    if (name?.trim().length < 3) {
      errorObj.name = 'Имя не может быть менее 3-х символов!'
      console.log("error");
    }

    // сделать ошибку с пустым именем
    if (name?.trim() === "") {
      errorObj.name = 'Имя не может быть пустой строкой!'
    }

    // сделать ошибку с длинной имен
    if (name?.trim().length > 13) {
      errorObj.name = 'Имя не может быть более 13-и символов!'      
    }

    if (
      stars.trim() <= 0 ||
      stars.trim() > 5 ||
      stars.trim() === "" ||
      Number(stars.trim()) !== +stars.trim()
    ) {
      errorObj.stars = 'Оценка должна быть от 1 до 5!' 
    }

    if (errorObj.name && errorObj.stars) {
      errorObj.stars = '';
    }

    setErrValue(errorObj)

    if (errorObj.name || errorObj.stars) {
      return
    } else {
    localStorage.setItem("nameField", '');
    localStorage.setItem("starsField", '');
    localStorage.setItem("textField", '');
    setName('')
    setStars('')
    setText('')
    }
  };

  return (
    <div className="reviews-form margin-top60 reviews-form_padding">
      <form
        action="#"
        className="reviews-form__form"
        id="review-form"
        onSubmit={handleSubmit}
      >
        <fieldset className="reviews-form__field">
          <legend className="block-title margin-bottom15">
            Добавить свой отзыв
          </legend>
          <div className="reviews-form__name-stars">
            <input
              className="review-form__name form-hover-focus"
              type="text"
              name="name"
              id="name"
              placeholder="Имя и Фамилия"
              value={name}
              onChange={handleName}
              onFocus={handleFocusName}
            />
            <div
              className=
              {`review-form__err-name ${errValue?.name ? "vision-on" : ''}`}
              id="err-name"
            >
              <span className="review-form__err-text">
              {errValue?.name}
              </span>
            </div>
            <div
              className={`review-form__err-stars ${errValue?.stars ? "vision-on" : ''}`}
              id="err-stars"
            >
              <span className="review-form__err-rating">
              {errValue?.stars}
              </span>
            </div>
            <input
              className="review-form__stars form-hover-focus"
              type="text"
              name="stars"
              id="stars"
              placeholder="Оценка"
              value={stars}
              onChange={handleStars}
              onFocus={handleFocusStars}
            />
          </div>
          <textarea
            className="review-form__text form-hover-focus"
            type="text"
            name="name"
            id="text"
            placeholder="Текст отзыва"
            value={text}
            onChange={handleText}
          ></textarea>
          <button className="reviews-form__submit margin-top10" type="submit">
            Отправить отзыв
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
