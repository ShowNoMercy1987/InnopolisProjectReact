import "../SideBar/SideBar.css";
import { ReactComponent as LikeMe } from "../img/icons/heart.svg";
import Ads from "../Ads/Ads";
import { useDispatch } from "react-redux";
import { useState } from "react";
import cn from "classnames";
import { addProduct, removeProduct } from "../Reducer/cart-reducer";
import { addLike, removeLike } from "../Reducer/like-reducer";

const SideBar = () => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("Добавить в корзину");
  const [likeActive, setLikeActive] = useState(false);

  const dispatch = useDispatch();

  const handleLike = () => {
    setLikeActive(!likeActive);
    if (!likeActive) {
      const actionLike = addLike({ id: 0, name: "iPhone 13 pro" });
      dispatch(actionLike);
    } else {
      const actionLikeRem = removeLike({ id: 0, name: "iPhone 13 pro" });
      dispatch(actionLikeRem);
    }
  };

  const handleProduct = () => {
    setActive(!active);

    if (value === "Добавить в корзину") {
      const actionAdd = addProduct({ id: 0, name: "iPhone 13 pro" });
      dispatch(actionAdd);
      setValue("Товар уже в корзине");
    } else {
      const actionRem = removeProduct({ id: 0, name: "iPhone 13 pro" });
      dispatch(actionRem);
      setValue("Добавить в корзину");
    }
  };

  return (
    <>
      <aside className="sidebar">
        <div className="price">
          <div className="price__list">
            <div className="price__value">
              <div className="prise__discount">
                <span className="price__sell-old">75 990₽</span>
                <span className="price__sell-percent">-8%</span>
              </div>
              <button
                className={
                  likeActive ? "price__like price__like_on" : "price__like"
                }
                onClick={handleLike}
              >
                <LikeMe />
              </button>
            </div>
            <p className="price__sell-new">67 990₽</p>
            <div className="price__post">
              <p>
                Самовывоз в четверг, 1 сентября — <b>бесплатно</b>
              </p>
              <p>
                Курьером в четверг, 1 сентября — <b>бесплатно</b>
              </p>
            </div>
            <button
              className={cn(
                "price__add price__add_cart",
                active ? "price__off" : ""
              )}
              id="buy"
              onClick={handleProduct}
            >
              {value}
            </button>
          </div>
        </div>
        <div className="ads">
          <span className="ads__text">Реклама</span>
          <div className="side-ads">
            {" "}
            <Ads />
          </div>
          <div className="side-ads">
            {" "}
            <Ads />
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
