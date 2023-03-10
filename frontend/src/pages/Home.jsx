import React from "react";
import { CarouselComponent } from '../components/carousel/carousel';
import Badge from 'react-bootstrap/Badge';
import { AccrodionComponent } from '../components/accordion/accordion';
import {HomeCardComponent} from '../components/card/homeCard';
import { MDBIcon } from 'mdb-react-ui-kit';

import './home.css';

export const Home = () => {
    return (
        <>
            <div className="container">
                <CarouselComponent />
            </div>

            <div className="containerTwo">
                <h1>
                    Найди свой стиль <Badge bg="secondary"></Badge>
                </h1>

                <span>
                    Компания "Крон" занимается изготовлением и продажей модной одежды из натуральных тканей.
                    Наши торговые марки: "Русский лен", "Elena Zelini", "Lino Russo", "Linit" — широко известны
                    не только в России, но и по всему миру.
                    17 брендовых магазинов в РФ, 2 в Италии, более 50 торговых точек партнеров, предлагающих
                    наши торговые марки в Англии, Франции, Швейцарии, Японии, Тайланде, США, Корее, Саудовской Аравии,
                    ЮАР, — география наших продаж с каждым годом увеличивается.
                    С 2009 года наши покупатели получили уникальную возможность покупать качественную одежду из натуральных
                    тканей, не выходя из дома, — через интернет-магазин "Крон.ru".
                </span>
            </div>

            <div className="containerThree">
                <HomeCardComponent/>
            </div>

            <div className="containerFour">
                <h1>
                    Почему мы <Badge bg="primary">?</Badge>
                </h1>
                <AccrodionComponent />
            </div>

        </>
    )
} 