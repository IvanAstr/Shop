import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";

export const Auth = () => {
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center"
                style={{ height: window.innerHeight - 54 }}
            >
                <Card style={{ width: "600px" }} className="p-5" >
                    <h2 className="m-auto">Авторизация</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш email..."
                        />

                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш пароль..."
                        />

                        <Row className="d-flex justify-content-between mt-3 pl-4 pr-4">

                            <div className="" style={{'width':300}}>
                                Нет аккаунта? <NavLink >Зарегистрируйся!</NavLink>
                            </div>
                            <Button className="" style={{'width':150}} variant={"outline-success"}>
                                Войти
                            </Button>

                        </Row>

                    </Form>

                </Card>
            </Container>
        </>
    )
}