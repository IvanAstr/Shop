import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Basket from "../../state/basket";

import "./detailCard.css"

export const DetailProduct = ({ name, description, color, gender, price, category, img }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="mainSection">

                <div className="imgSection">
                    <Card >
                        <Card.Img  variant="top" src={`${img}`} />
                    </Card>
                </div>

                <div className="contentSection" >
                    <Card style={{ width: '100%' }}>
                        <Card.Header>
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link href="#disabled" disabled>
                                        Характеристики
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title style={{ width: '50%' }}>{name}</Card.Title>
                            <Card.Text>
                                <p>Описание: {description}</p>
                                <p>Цвеет: {color}</p>
                                <p>Приндлежность: {gender}</p>
                                <p>Цена: {price}</p>


                            </Card.Text>
                            <div className="btn-link">
                                <Button className='btn' variant="primary" onClick={() => navigate(`/catalogs/${category}`)}>Назад</Button>
                                <Button className='btn' variant="success" onClick={() => {navigate(`/basket`); Basket.addPoducts({ name, price, img}) }}>Купить</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    );
}