import "./Reviews.css";
import Review from "../Review/Review";
import reviewList from "./reviewList";

function Reviews() {
  return (
    <>
      <div className="reviews-title">
        <div className="reviews-title__count">
          <p className="review-title">Отзывы</p>
          <span className="reviews-count">425</span>
        </div>
      </div>
      {reviewList.map(function (item, id) {
        return (
          <div className="reviews" key={id}>
            <Review
              avatar={item.avatar}
              rating={item.rating}
              exp={item.exp}
              commentPlus={item.commentPlus}
              commentMinus={item.commentMinus}
            />
          </div>
        );
      })}
    </>
  );
};

export default Reviews;
