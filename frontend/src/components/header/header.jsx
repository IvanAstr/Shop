import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, Link } from 'react';
import { useHttp } from '../../hooks/http.hooks';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsCart3 } from "react-icons/bs";
import { BsBoxArrowRight } from "react-icons/bs";
import Basket from "../../state/basket";

import './header.css';


// import {OffcanvasExample} from "../select/selectHeader"

export const Header = () => {
    //basket

    //end basket

    const navigate = useNavigate();
    const { request, loading } = useHttp();

    const [catalog, setCatalogs] = useState([]);

    const fetchCatalogs = React.useCallback(async () => {
        try {
            const response = await request(`/api/catalogs`, 'GET', null);
            // console.log(response);
            setCatalogs([...catalog, ...response.map(item => [item.id, item.categoryName])]);
        }
        catch (err) {
            console.log(err);
        }
    }, [request]);

    React.useEffect(() => {
        fetchCatalogs();
    }, [fetchCatalogs]);

    const navClose = (page) => {
        document.body.classList.toggle("modal-open");

        navigate(page);
    };

    return (
        <>
            {['xl'].map((expand) => (
                <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="d-block w-100">
                    <Container fluid>
                        <Navbar.Brand onClick={() => navClose(`/`)}>Крон</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Body>
                                <Nav className="justify-content-space-around align-items-center flex-grow-1 pe-3" >
                                    <Nav.Link onClick={() => navClose('/')}>Главная</Nav.Link>
                                    <Nav.Link onClick={() => navClose(`/about`)}>О нас</Nav.Link>
                                    <Nav.Link onClick={() => navClose(`/contacts`)}>Контакты</Nav.Link>

                                    <NavDropdown
                                        title="Каталог"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        {catalog.map((item, index) => {
                                            // console.log(item)
                                            return (
                                                // <NavDropdown.Item key={index} onClick={()=>navigate(`/catalogs/${item[0]}`)}>{item[1]}</NavDropdown.Item>
                                                <NavDropdown.Item key={index} href={`/catalogs/${item[0]}`}>{item[1]}</NavDropdown.Item>
                                            )
                                        })}

                                        <NavDropdown.Divider />
                                        <NavDropdown.Item >
                                            Категории
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    {/* <NavDropdown
                                        title="Аксесуары"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        {catalog.map((item, index) => {
                                            // console.log(item)
                                            return (
                                                // <NavDropdown.Item key={index} onClick={()=>navigate(`/catalogs/${item[0]}`)}>{item[1]}</NavDropdown.Item>
                                                <NavDropdown.Item key={index} href={`/catalogs/${item[0]}`}>{item[1]}</NavDropdown.Item>
                                            )
                                        })}

                                        <NavDropdown.Divider />

                                    </NavDropdown> */}

                                </Nav>
                                <Form className="d-flex">

                                    <Button className='basket' onClick={() => navClose('/basket')} variant="light">
                                        <BsCart3/>
                                    </Button>

                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}


        </>
    );

}
