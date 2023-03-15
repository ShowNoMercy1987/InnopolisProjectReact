import "./Colors.css";
import ColorButton from "../ColorButton/ColorButton";
import colorlist from "./colorslist";
import { useState } from "react";

function Colors() {
  const [active, setActive] = useState(1);
  const [color, setColor] = useState('красный');

  const handleClick = (e, id, value) => {
    setActive(id)
    setColor(value)
    console.log(`активная кнопка: ${value}`)
  };

  return (
    <>
      <div className="colors-box">
        <p className="block-title margin-bottom15">Цвет товара: {color}</p>
        <div className="colors-box__list">
          {colorlist.map(function (list) {
            return (
              <ColorButton
                src={list.color}
                alt={list.alt}
                key={list.id}
                value={list.value}
                active={list.id === active}
                onClick={(e) => {handleClick(e, list.id, list.value)}}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Colors;
