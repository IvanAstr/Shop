import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { YMaps, Map } from '@pbe/react-yandex-maps';

import "./Contacts.css"

export const Contacts = ({ name, description, color, gender, price, category }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="mainSection">

                <div className="contentSection" >
                    <Card style={{ width: '100%', height:'95%' }}>
                        <Card.Header>
                            <Nav variant="pills" >
                                <Nav.Item >
                                    <Nav.Link href="#disabled" disabled>
                                        <h2>Контакты </h2>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>

                            <Card.Text style={{ display: 'flex', alignItems: "flex-start", }}>
                                <div className="cont" style={{ textAlign: "justify" }}>
                                    <p  ><span>Адрес:</span> Барнаул, ул.Советов 32, RU</p>


                                    <p><span>Телефоны:</span> +7 999 999 99 99 или +7 988 888 88 88</p>

                                    <p><span>Электронная почта:</span> Example@example.com</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='formFeedback'>
                    <h2>Свяжитесь с нами!</h2>
                    <p>Если у вас есть предложения, замечания или вопросы, присылайте их с помощью формы, расположенной ниже. Мы ответим вам в ближайшее время!</p>
                    <Form className='form'>
                        <Form.Group className="mb-12" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Имя"
                            />
                            <br />
                            <Form.Control type="email" placeholder="Почта: name@example.com" />                            <br />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Сообщение" />
                        </Form.Group>
                        <Button type="submit">Отправить</Button>

                    </Form>

                </div>

            </div>



        </>
    );
}