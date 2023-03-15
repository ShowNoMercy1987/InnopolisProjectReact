import "./ColorButton.css"
import styles from "../ColorButton/ColorButton.module.css"

function ColorButton({ id, src, alt, value, active, ...restProps }) {
  const className = `colors-box__btn ${active ? 'colors-box__btn_active' : ''}`
  return (
    <>
      <button {...restProps} className={className}  value={value} id={id}>
          <img className={styles.height} src={src} alt={alt} />
      </button>
    </>
  );
}

export default ColorButton;