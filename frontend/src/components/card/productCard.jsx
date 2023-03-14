import {React, useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Header } from '../header/header';
import Basket from "../../state/basket";

import "./productCard.css";
export const Products = ({ id, title,price,img }) => {
  const navigate = useNavigate();
  const count = 1;

  return (
    <Card style={{ width: '18rem', marginBottom: "40px", margin: "15px" }}>
      <Card.Img className='img' variant="top" src={`${img}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Цена: {price} р.

        </Card.Text>
        <div className="ls-2">
          <Button style={{ margin: '0' }} className="mb-1 button" onClick={() => navigate(`/product/${id}`)}>Подробнее</Button>
          <Button style={{ margin: '0' }} className="mb-1 button" variant="success" onClick={() => {Basket.addPoducts({id,title, price, img,count}) }}>Купить</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
