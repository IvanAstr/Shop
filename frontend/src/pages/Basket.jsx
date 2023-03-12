import { React, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Basket from "../state/basket.js";
import "./basket.css"

import { ImBin } from "react-icons/im";
import { BsCart3 } from "react-icons/bs";


export const BasketProduct = observer(() => {
    // const [basket, setBasket] 
    // { console.log(Basket.poducts[0]) }

    // const [countPrice, setCount] = useState(1);

    // const incriment = () => {
    //     setCount(count + 1);
    // }
    // const dicriment = () => {
    //     if (count > 1) {
    //         setCount(count - 1);

    //     }
    // }



    return (
        <>
            <div className="sektion">
                <h1>Корзина <BsCart3 /></h1>


                <div className="basket">

                    {
                        Basket.poducts.map(p =>
                            <Card className="basketProduct" key={p.id} >
                                <Card.Img className="imgg" variant="top" src={p.img} style={{ width: "20rem" }} />
                                <Card.Body className="contennt">
                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Text>
                                        Цена: {p.price} р.
                                        Количество: {p.count}
                                    </Card.Text>
                                    <Button variant="success" >Оформить</Button>
                                    {/* <Button variant="primary" onClick={() => incriment()} >+</Button>
                                    <Button variant="primary" onClick={() => dicriment()}>-</Button> */}
                                    <Button variant="danger" onClick={() => Basket.removePoducts(p.id)}><ImBin /></Button>
                                </Card.Body>
                            </Card>
                        )
                    }
                </div>
            </div>
        </>
    )
})