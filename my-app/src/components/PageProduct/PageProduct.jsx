import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CrumpsBlock from "../CrumpsBlock/CrumpsBlock";
import Colors from "../Colors/Colors";
import Config from "../Config/Config.jsx";
import Reviews from "../Reviews/Reviews";
import "../PageProduct/PageProduct.css";
import Image1 from "../img/image-1.webp";
import Image2 from "../img/image-2.webp";
import Image3 from "../img/image-3.webp";
import Image4 from "../img/image-4.webp";
import Image5 from "../img/image-5.webp";
import ReviewForm from "../ReviewForm/ReviewForm";
import SideBar from "../SideBar/SideBar";

function PageProduct() {
  return (
    <div className="body-box">
      <Header />
      <div className="content">
        <CrumpsBlock />
        <main className="inner-padding">
          <section>
            <div className="container">
              <p className="section-titile">Смартфон Apple iPhone 13, синий.</p>
            </div>
            <div className="big-photos">
              <img
                className="big-photos__img big-photos__img_height"
                src={Image1}
                alt="IPhone 13 изображение фронтального и тылового вида"
              />
              <img
                className="big-photos__img big-photos__img_height"
                src={Image2}
                alt="IPhone 13 изображение фронтального вида"
              />
              <img
                className="big-photos__img big-photos__img_height"
                src={Image3}
                alt="IPhone 13 изображение вида под углом"
                height="387"
              />
              <img
                className="big-photos__img big-photos__img_height"
                src={Image4}
                alt="IPhone 13 изображение камеры"
              />
              <img
                className="big-photos__img big-photos__img_height"
                src={Image5}
                alt="IPhone 13 изображение тылового и фронтального вида"
              />
            </div>

            <div className="wrapper margin-top30">
              <div className="specs">
                <Colors />
                <Config />
                <div className="charakter">
                  <p className="block-title">Характеристики товара</p>
                  <div className="charakter__list">
                    <ul>
                      <li className="charakter__marker charakter__marker_marker-margin">
                        Экран: <b>6.1</b>
                      </li>
                      <li className="charakter__marker charakter__marker_marker-margin">
                        Встроенная память: <b>128 ГБ</b>
                      </li>
                      <li className="charakter__marker charakter__marker_marker-margin">
                        Операционная система: <b>iOS 15</b>
                      </li>
                      <li className="charakter__marker charakter__marker_marker-margin">
                        Беспроводные интерфейсы: <b>NFC, Bluetooth, Wi-Fi</b>
                      </li>
                      <li className="charakter__marker charakter__marker_marker-margin">
                        Процессор:
                        <b>
                          <a
                            className="link-blue-color"
                            href="https://ru.wikipedia.org/wiki/Apple_A15"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Apple a-15 Bionic
                          </a>
                        </b>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="synopsis">
                  <p className="block-title margin-bottom15">Описание</p>
                  <div className="synopsis__list">
                    <ul>
                      <li className="synopsis__marker synopsis__marker_disbled">
                        Наша самая совершенная система двух камер.
                      </li>
                      <li className="synopsis__marker synopsis__marker_disbled">
                        Особый взгляд на прочность дисплея.
                      </li>
                      <li className="synopsis__marker synopsis__marker_disbled">
                        Чип, с которым всё супербыстро.
                      </li>
                      <li className="synopsis__marker synopsis__marker_disbled">
                        Аккумулятор держится заметно дольше.
                      </li>
                      <li className="synopsis__marker synopsis__marker_disbled">
                        <i>iPhone 13 - сильный мира всего.</i>
                      </li>
                    </ul>
                    <p>
                      Мы разработали совершенно новую схему расположения и
                      развернулиобъективы на 45 градусов. Благодаря этому внутри
                      корпуса поместилась нашалучшая система двух камер с
                      увеличенной матрицей широкоугольной камеры. Кроме того, мы
                      освободили место для системы оптической
                      стабилизацииизображения сдвигом матрицы. И повысили
                      скорость работы матрицы насверхширокоугольной камере.
                    </p>

                    <p>
                      Новая сверхширокоугольная камера видит больше деталей в
                      тёмных областяхснимков. Новая широкоугольная камера
                      улавливает на 47% больше света для более качественных
                      фотографий и видео. Новая оптическая стабилизация
                      сосдвигом матрицы обеспечит чёткие кадры даже в
                      неустойчивом положении.
                    </p>

                    <p>
                      Режим «Киноэффект» автоматически добавляет великолепные
                      эффекты перемещенияфокуса и изменения резкости. Просто
                      начните запись видео. Режим «Киноэффект»будет удерживать
                      фокус на объекте съёмки, создавая красивый эффект
                      размытиявокруг него. Режим «Киноэффект» распознаёт, когда
                      нужно перевести фокус на другогочеловека или объект,
                      который появился в кадре. Теперь ваши видео будут
                      смотретьсякак настоящее кино.
                    </p>
                  </div>
                </div>

                <div className="table margin-bottom20">
                  <p className="block-title">Сравнение моделей</p>
                  <table className="table__body">
                    <thead className="table__head">
                      <tr className="table__line">
                        <th className="table-cell table-border-right">
                          Модель
                        </th>
                        <th className="table-cell table-border-right">Вес</th>
                        <th className="table-cell table-border-right">
                          Высота
                        </th>
                        <th className="table-cell table-border-right">
                          Ширина
                        </th>
                        <th className="table-cell table-border-right">
                          Толщина
                        </th>
                        <th className="table-cell table-border-right">Чип</th>
                        <th className="table-cell table-border-right">
                          Объем памяти
                        </th>
                        <th className="table-cell">Аккумулятор</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table__line table__line_target">
                        <td className="table-cell table-border-right">
                          IPhone-11
                        </td>
                        <td className="table-cell table-border-right">
                          194 грамма
                        </td>
                        <td className="table-cell table-border-right">
                          150.9 мм
                        </td>
                        <td className="table-cell table-border-right">
                          75.7 мм
                        </td>
                        <td className="table-cell table-border-right">
                          8.3 мм
                        </td>
                        <td className="table-cell table-border-right">
                          A13 Bionic chip
                        </td>
                        <td className="table-cell table-border-right">
                          До 128 ГБ
                        </td>
                        <td className="table-cell">До 17 часов</td>
                      </tr>
                      <tr className="table__line table__line_target">
                        <td className="table-cell table-border-right">
                          IPhone-12
                        </td>
                        <td className="table-cell table-border-right">
                          164 грамма
                        </td>
                        <td className="table-cell table-border-right">
                          146.7 мм
                        </td>
                        <td className="table-cell table-border-right">
                          71.5 мм
                        </td>
                        <td className="table-cell table-border-right">
                          7.4 мм
                        </td>
                        <td className="table-cell table-border-right">
                          A14 Bionic chip
                        </td>
                        <td className="table-cell table-border-right">
                          До 256 ГБ
                        </td>
                        <td className="table-cell">До 19 часов</td>
                      </tr>
                      <tr className="table__line table__line_target">
                        <td className="table-cell table-border-right">
                          IPhone-13
                        </td>
                        <td className="table-cell table-border-right">
                          174 грамма
                        </td>
                        <td className="table-cell table-border-right">
                          146.7 мм
                        </td>
                        <td className="table-cell table-border-right">
                          71.5 мм
                        </td>
                        <td className="table-cell table-border-right">
                          7.65 мм
                        </td>
                        <td className="table-cell table-border-right">
                          A15 Bionic chip
                        </td>
                        <td className="table-cell table-border-right">
                          До 512 ГБ
                        </td>
                        <td className="table-cell">До 19 часов</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Reviews />
                <ReviewForm />
              </div>
              <SideBar />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default PageProduct;
