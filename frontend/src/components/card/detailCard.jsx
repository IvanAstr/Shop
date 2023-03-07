import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';



import "./detailCard.css"

export const DetailProduct = ({ name, description, color, gender, price, category }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="mainSection">

                <div className="imgSection">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../img/card03.jpg" />
                    </Card>
                </div>

                <div className="contentSection">
                    <Card>
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
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <p>Описание: {description}</p>
                                <p>Цвеет: {color}</p>
                                <p>Приндлежность: {gender}</p>
                                <p>Цена: {price}</p>


                            </Card.Text>
                            <Button variant="primary" onClick={()=>navigate(`/catalogs/${category}`)}>Назад</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    );
}