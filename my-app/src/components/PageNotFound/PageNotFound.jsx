import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import error from "../../components/img/404.jpg"
import "../PageNotFound/PageNotFound.css"

function PageNotFound() {
  return (
    <body>
      <div className="body-box">
        <Header />
        <div className="body__main body-box">
          <main className="inner-padding">
            <div className="content">
              <img className="crumps_padding error-img" src={error} alt="страница не найдена" />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </body>
  );
}

export default PageNotFound;
