import "./Cart.css";
import { ReactComponent as Cart } from "../img/icons/cart.svg";
import { useSelector } from "react-redux";
import CartMenu from "./CartMenu";
import { useState } from "react";

const CartBtn = (props) => {
  const [cartActive, setCartActive] = useState(false);

  const handleClick = () => {
    setCartActive(true);
  };

  const count = useSelector((store) => store.cart.products.length);
  return (
    <>
      <div className="header__fav" onClick={handleClick}>
        <Cart />
        <div className={`${count === 0 ? "header__buy-icon vision-off" : "header__buy-icon"}`}>
          <span className="header__number-buy">{`${count}`}</span>
        </div>
      </div>
      <CartMenu active={cartActive} setActive={setCartActive} />
    </>
  );
};

export default CartBtn;