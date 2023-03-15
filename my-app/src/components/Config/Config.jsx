import ConfigButton from "../ConfigButton/ConfigButton";
import memory from "./memory";
import { useState } from "react";

function Config() {
  const [active, setActive] = useState(1);
  const [gb, setGb] = useState('128 Гб')

  const handleClick = (e, id, value, size) => {
    setActive(id)
    setGb(size)
    console.log(`выбранная память ${value}`)
  }

  return (
    <>
      <div className="memory">
        <p className="block-title margin-bottom15">
          Конфигурация памяти: {gb}
        </p>
        <div className="memory__buttons">
          {memory.map(function (size) {
            return (
                <ConfigButton
                  size={size.size}
                  key={size.id}
                  value={size.value}
                  active={size.id === active}
                  onClick={(e) => {handleClick(e, size.id, size.value, size.size)}}
                />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Config;
