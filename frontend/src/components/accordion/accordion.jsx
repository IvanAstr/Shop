import Accordion from 'react-bootstrap/Accordion';

export const AccrodionComponent = ()=> {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. Признание на международном уровне.</Accordion.Header>
        <Accordion.Body>
            В течение уже более 15 лет компания "Крон" представляет свои коллекции на всемирных выставках в Италии и Франции: SALONE NAUTICO (Генуя), PITTI UOMO e PITTI IMMAGINE CASA (Флоренция), MAISON ET OBJET (Париж), MACEF (Милан), IL SALONE INTERNAZIONALE DEL MOBILE E DEL COMPLEMENTO D’ARREDO (Милан).
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>2. Уникальный ассортимент.</Accordion.Header>
        <Accordion.Body>
            В интернет-магазине "Крон.ru" представлены коллекции мужской, женской и детской одежды (в том числе платья, брюки, юбки, рубашки, блузы, бриджи, шорты, пижамы, халаты), а также большой выбор текстиля для дома. Здесь Вы сможете приобрести модное постельное белье из натуральных тканей, столовые комплекты, фартуки, скатерти, салфетки, а также пледы, покрывала, шторы и итальянские ткани.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>3. Качество и цены от производителя.</Accordion.Header>
        <Accordion.Body>
            Изделия компании "Крон" производятся на собственной швейной фабрике. Мы работаем только с надежными поставщиками тканей (зарубежными: Италия, Белоруссия, Китай, Турция, и российскими: Трехгорной мануфактурой, Яковлевским льнокомбинатом, Большой Костромской Льняной Мануфактурой). Сначала модель разрабатывается конструкторами и дизайнерами, шьются ее пробные экземпляры, и лишь потом, доведенная до совершенства, она отправляется в производство. Такая система контроля позволяет нам гарантировать высокое качество изделий, а собственное производство дает возможность устанавливать привлекательные для наших клиентов цены
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>4. Эксклюзивные модели.</Accordion.Header>
        <Accordion.Body>
            У нас в продаже только 100% авторские вещи.  Несмотря на достаточно демократичные цены, Вы можете быть уверены, что в одежде от "Крон" будете выглядеть стильно и оригинально.        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>5. Товар можно вернуть или обменять.</Accordion.Header>
        <Accordion.Body>
            Вы сможете отказаться от заказанного товара до его передачи, в момент передачи или в течение 14 дней после нее. Причинами обмена или возврата может быть ненадлежащее качество товара или его неправильная комплектация.  Также Вы сможете вернуть заказ, если одежда не подошла Вам по размеру, цвету или фасону.      
        </Accordion.Body>
        </Accordion.Item>
    </Accordion>

  );
}
