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


// import {OffcanvasExample} from "../select/selectHeader"

export const Header = () => {

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
                <Navbar key={expand} bg="light" expand={expand} className="d-block w-100">
                    <Container fluid>
                        <Navbar.Brand onClick={() => navClose(`/main`) }>Крон</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Body>
                                <Nav className="justify-content-space-around flex-grow-1 pe-3" >
                                    <Nav.Link  onClick={() => navClose('/main')}>Главная</Nav.Link>
                                    <Nav.Link onClick={() => navClose(`/about`)}>О нас</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
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
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}


            {/* <OffcanvasExample/>
            <Navbar className="d-block w-100" bg="light" variant="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand onClick={() => navigate(`/main`)}>Крон</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={() => navigate(`/main`)}>Главная</Nav.Link>
                            <Nav.Link onClick={() => navigate(`/about`)}>О нас</Nav.Link>
                            <NavDropdown title="Каталог" id="navbarScrollingDropdown">

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
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Поиск"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Найти</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

        </>
    );

}
