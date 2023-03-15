import "./Review.css";

const Review = (props) => {
  const { avatar, rating, exp, commentPlus, commentMinus } = props;
  return (
    <>
          <div>
            <div className="reviews-list">
              <div className="review-block">
                <div className="review-block__img">
                  <img
                    className="review-block__avatar"
                    src={avatar}
                    alt="аватар пользователя"
                  />
                </div>
                <div className="review-block__title">
                  <div className="review-block__user">
                    <p className="rewiews-user">Марк Г.</p>
                    <img
                      className="review-block__stars"
                      src={rating}
                      alt="рейтинг устройства"
                    />
                  </div>
                  <div className="review__text review__text_padding">
                    <p>
                      <b>Опыт использования:</b> {exp}
                    </p>
                    <p>
                      <b>Достоинства:</b> {commentPlus}
                    </p>
                    <p>
                      <b>Недостатки:</b> {commentMinus}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default Review;
