import "../Header/Header.css";
import NameLogo from "../img/favicon/apple-touch-icon.png";
import CartBtn from "../CartBtn/Cart";
import LikeBtn from "../LikeBtn/Like";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-box">
      <header className="header inner-padding">
        <div className="header-logo">
          <div className="header-logo__img">
            <img
              className="header-logo__img_height"
              src={NameLogo}
              alt="Логотип сайта"
            />
          </div>
          <div className="header-logo__text">
            <Link to="/" className="link-blue-color main__link">
              <h1 className="h1-title black-text">
                <span className="orange-text">My</span>Market
              </h1>
            </Link>
          </div>
        </div>
        <div className="header__buttons">
          <LikeBtn />
          <div className="header__like-list">
            <span className="header__fav-title">Избранное</span>
            <span className="header__like-added"></span>
          </div>
          <CartBtn />
          <div className="header__fav burger-button" id="burger-button">
            <div className="burger__button-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
      <div className="menu inner-padding">
        <div className="menu-wrap">
          <ul className="menu__list">
            <li className="menu__item">
              <Link to="/" className="link-blue-color main__link">
                Главная
              </Link>
              <ul className="menu__sub-list">
                <li className="menu__sub-link">
                  <a className="link-blue-color" href="replace">
                    Новости
                  </a>
                </li>
                <li className="menu__sub-link">
                  <a className="link-blue-color" href="replace">
                    Форум
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu__item">
              <a href="replace" className="link-blue-color">
                Смартфоны
              </a>
              <ul className="menu__sub-list">
                <li className="menu__sub-link">
                  <a className="link-blue-color" href="replace">
                    Android
                  </a>
                </li>
                <li className="menu__sub-link">
                  <a className="link-blue-color" href="replace">
                    iOS
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu__item">
              <a href="replace" className="link-blue-color">
                Планшеты
              </a>
              <ul className="menu__sub-list">
                <li className="menu__sub-link">
                  <a className="link-blue-color" href="replace">
                    Android
                  </a>
                </li>
                <li className="menu__sub-link">
                  <a className="link-blue-color" href="replace">
                    iOS
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu__item">
              <a href="replace" className="link-blue-color">
                Комплектующие
              </a>
              <ul className="menu__sub-list">
                <li className="menu__sub-link">
                  <a className="link-blue-color" href="replace">
                    Кабели
                  </a>
                </li>
                <li className="menu__sub-link">
                  <a className="link-blue-color" href="replace">
                    Переходники
                  </a>
                </li>
                <li className="menu__sub-link">
                  <a className="link-blue-color" href="replace">
                    Гарнитура
                  </a>
                </li>
                <li className="menu__sub-link">
                  <a className="link-blue-color" href="replace">
                    Зарядки
                  </a>
                </li>
                <li className="menu__sub-link">
                  <a className="link-blue-color" href="replace">
                    Переферия
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu__item">
              <a href="replace" className="link-blue-color">
                Обратная связь
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
