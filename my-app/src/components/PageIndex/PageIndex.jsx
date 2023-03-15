import "./PageIndex.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function PageIndex() {
  return (
      <div className="body-box">
        <Header />
        <div className="body__main body-box">
          <main className="inner-padding">
            <div className="content">
              <section>
                <span className="main__text">
                  Тут могла быть какая то главная страница, но из-за того, что
                  гуру ну ОоОоОЧЕенЬ! ленивый - этой страницы не будет! ^_^
                </span>
                <Link to="/product" className="link-blue-color main__link">
                  Перейти на страницу товара
                </Link>
              </section>
            </div>
          </main>
        </div>
        <Footer />
      </div>
  );
}

export default PageIndex;
