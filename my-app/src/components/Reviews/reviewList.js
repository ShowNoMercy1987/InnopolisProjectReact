import Avatar1 from "../img/review-1.jpeg";
import Avatar2 from "../img/review-2.jpeg";
import Star from "../img/star-5.png";


let reviewList = [
  {
    id: 1,
    name: "Марк Г.",
    avatar: Avatar1,
    rating: Star,
    exp: "менее месяца",
    commentPlus:
      "это мой первый айфон после после огромного количества телефонов на андроиде. Всё плавно, чётко и красиво. довольно шустрое устройство. Камера весьма неплохая,ширик тоже на высоте.",
    commentMinus:
      "к самому устройству мало имеет отношение, но перенос данных с андроида - адскаявещь, а если нужно переносить фото с компа, то это только через itunes, которыйурезает качество фотографий исходное",
  },

  {
    id: 2,
    name: "Валерий Коваленко",
    avatar: Avatar2,
    rating: Star,
    exp: "менее месяца",
    commentPlus:
      "OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго",
    commentMinus: "Плохая ремонтопригодность",
  },
]

export default reviewList;
