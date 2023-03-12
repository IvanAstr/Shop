import React from "react";
import Badge from 'react-bootstrap/Badge';
import {TabLayoutComponent} from "../components/customTabLayout/customTabLayout"
import './about.css';

export const About = () => {
    return (
        <>
            <div className="containerOne">
                <h1>
                    <Badge bg="primary">О нас</Badge>
                </h1>
                <span>
                    Компания "Крон" fзанимается изготовлением и продажей модной одежды из натуральных тканей.
                    Наши торговые марки: "Русский лен", "Elena Zelini", "Lino Russo", "Linit" — широко известны
                    не только в России, но и по всему миру.
                    17 брендовых магазинов в РФ, 2 в Италии, более 50 торговых точек партнеров, предлагающих
                    наши торговые марки в Англии, Франции, Швейцарии, Японии, Тайланде, США, Корее, Саудовской Аравии,
                    ЮАР, — география наших продаж с каждым годом увеличивается.
                    С 2009 года наши покупатели получили уникальную возможность покупать качественную одежду из натуральных
                    тканей, не выходя из дома, — через интернет-магазин "Крон.ru".
                </span>

                <h1>
                    <Badge bg="primary">Мы создаем:</Badge>
                </h1>
                <TabLayoutComponent/>
            </div>
        </>
    )
} 