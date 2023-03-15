import "./CartMenu.css";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const CartMenu = ({ active, setActive }) => {

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });
  let refOne = useRef();
  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target)) {
      setActive(false);
    }
  };

  
  const cartCount = useSelector((store) => store.cart.products.length);
  const cartName = useSelector((store) => store.cart.products);
  console.log(cartName)

  const getName = cartName.map(function(item) {
    return( 
      <span key="index">{item.name}</span>
    )
  })

  return (
    <>
      <div
        className={active ? "cartBox cartBox-active" : "cartBox"}
        ref={refOne}
        onClick={handleClickOutside}
      >
        <div className="cartContent">
          <div className="cartContent__title">
            <div className="cartContent__count">
              Количество товаров в корзине - {cartCount} шт.
            </div>
          </div>
          <div className="cartContent__ptoduct">
            <div className="cartContent__list">{getName}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartMenu;
