import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contactsStyle.css";
import "./paymentUs.css";

import Basket from "../state/basket.js";


export const PaymentUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_7y7nlj4',
            'template_1xq2b2d',
            form.current,
            'JUiyCQM28c1tvemAP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <>


            {/* <!-- Контейнер выравнивает по ширине и по центру --> */}
            <div className="container">

                {/* <!-- content содержит содержимое формы --> */}
                <div className="content">

                    {/* <!-- Правая колонка: сама форма --> */}
                    <div className="right-side">

                        {/* <!-- Заголовок для формы --> */}
                        <div className="topic-text">Форма оплаты{ }</div>

                        {/* <!-- Какой-то дополнительный текст --> */}
                        <p>
                            После отправки формы, наш специалист свяжется с вами и уточнит все характеристики товара.
                            <br />
                            Так же вы можете указать размер товара, цвет, покрой, количество и пр. в сообщении.
                        </p>

                        {/* <!-- Форма обратной связи --> */}
                        <form ref={form} onSubmit={sendEmail}>

                            {/* <!-- Каждый input для выравнивания вкладываем в блок input-box --> */}
                            <div className="input-box">
                                <input type="text" name="user_name" placeholder="Ваше имя" />
                            </div>
                            <div className="input-box">

                                <input type="tel" id="phone" name="user_phone" placeholder="Номер телефона"
                                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                    required></input>
                            </div>
                            <div className="input-box">
                                <input type="email" name="user_email" placeholder="E-mail" />
                            </div>
                            <div className="input-box message-box">
                                <textarea name="message" placeholder="Сообщение"></textarea>
                            </div>

                                <div class="cardMyProduct">

                                    <div class="photo">
                                        <img src={Basket.myProduct.img} />
                                    </div>

                                    <div class="description">
                                        <h2>{Basket.myProduct.title}</h2>
                                        <h1>Цена: {Basket.myProduct.price} р.</h1>
                                        {/* <h1>Количество: {Basket.myProduct.count}</h1> */}
                                    </div>

                                    <input type="hidden" name="product_id" value = {Basket.myProduct.id} />
                                    <input type="hidden" name="product_name" value = {Basket.myProduct.title} />
                                    <input type="hidden" name="product_price" value = {Basket.myProduct.price} />
                                    <input type="hidden" name="product_img" value = {Basket.myProduct.img} />

                                </div>
                                
                            <div className="button">
                                <input type="submit"  value="Отправить" />
                            </div>
                        </form>


                    </div>
                </div>
            </div>


        </>

    );
};
