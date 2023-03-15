import "./ConfigButton.css";

const ConfigButton = ({ id, size, value, active, ...restProps }) => {
const className = `memory__gray-button ${active ? `memory__gray-button_selected-color` : ''}`


  return (
    <>
      <button {...restProps} className={className} value={value} id={id}>{size}</button>
    </>
  );
};

export default ConfigButton;
