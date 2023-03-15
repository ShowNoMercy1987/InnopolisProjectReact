import "./Like.css";
import { ReactComponent as FavHeart } from "../img/icons/favorites.svg";
import { useSelector } from "react-redux";

const LikeBtn = (props) => {
  const count = useSelector((store) => store.like.likes.length);

  return (
    <>
      <div className="header__fav">
        <FavHeart />
        <div className={`${count === 0 ? "header__fav-icon vision-off" : "header__fav-icon"}`}>
          <span className="header__number-fav">{`${count}`}</span>
        </div>
      </div>
    </>
  );
};

export default LikeBtn;
