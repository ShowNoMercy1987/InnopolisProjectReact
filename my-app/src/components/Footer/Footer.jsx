import "../Footer/Footer.css";
import Time from "../Time/Time";

function Footer() {
  return (
    <div className="footer-box margin-top100">
      <footer className="footer inner-padding">
        <div className="footer__copyright">
          <p className="block-title font-size14">
            <span className="symbol-bold">©</span> ООО
            <span className="orange-text">«Мой</span>Маркет», <Time /> г.
          </p>
          <p className="font-size14">
            Для уточненияинформации звоните по номеру
            <a className="link-blue-color" href="tel:79000000000">
              +7 900 000 0000
            </a>
            ,
          </p>
          <p className="font-size14">
            а предложения по сотрудничеству отправляйте на почту
            <a className="link-blue-color" href="mailto:partner@mymarket.com">
              partner@mymarket.com
            </a>
          </p>
        </div>
        <a className="link-blue-color" href="#top">
          Наверх
        </a>
      </footer>
    </div>
  );
}

export default Footer;
