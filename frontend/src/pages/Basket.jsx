import { React, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

import Basket from "../state/basket.js";
import "./basket.css"
import Counter from "../state/counter";

import { ImBin } from "react-icons/im";
import { BsCart3 } from "react-icons/bs";

export const BasketProduct = observer(() => {
    const navigate = useNavigate();

    { console.log(Basket.poducts[0]) }
    const [modalActive,setModalActive] = useState(false);

    return (
        <>
            <div className="sektion">
                <h1>Корзина <BsCart3 /></h1>


                <div className="basket">
                    {
                        Basket.poducts.map((p, index )=>
                            <Card className="basketProduct" key={index} >
                                <Card.Img className="imgg" variant="top" src={p.img} style={{ width: "20rem" }} />
                                <Card.Body className="contennt">
                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                     Цена: {p.price} р.
                                    {/* <Counter index={index} price={p.price}/> */}
                                    <br/>
                                    <Button variant="success" onClick={() => {/*setModalActive(true)*/ navigate("/payment"); Basket.findProduct(index) }}>Оформить</Button>
                                    <Button variant="danger" onClick={() => Basket.removePoducts(index)}><ImBin /></Button>

                                </Card.Body>
                            </Card>
                        )
                    }

                </div>

            </div>

        </>
    )
})