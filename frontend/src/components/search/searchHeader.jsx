import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


import React, { useEffect, useState, Link } from 'react';
import { useHttp } from '../../hooks/http.hooks';
import { useNavigate, useParams } from 'react-router-dom';

import './searchHeader.css'

export const Search = (props) => {

    const id = useParams().id;
    const { request, loading } = useHttp();

    const products = props.products;

    const [productsList, setProductsList] = useState(products);
    const [searchTerm, setSearchTerm] = useState('');


    React.useEffect(() => {
        Dbounce();
    }, [ searchTerm]);



    const filterName = (searchText, listOfName) => {
        if (!searchText) {
            return listOfName
        }
        console.log("111",listOfName);
        return listOfName.filter((el) => el.toLowerCase().includes(searchText.toLowerCase()) )
    }
    const Dbounce = () => {
        setTimeout(() => {
            console.log('SearchTerm: ', searchTerm)
            console.log('products: ', products)
            const filteredName = filterName(searchTerm, products);
            console.log('filteredName products:', productsList)
            props.setFilterProducts(filteredName)
            setProductsList(filteredName);
        }, 0)
        return () => clearTimeout(Dbounce);
    }



    return (
        <>
            <Form className="Search">
                <Form.Control
                    value={searchTerm}
                    type="search"
                    placeholder="Поиск..."
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form>
        </>
    );
}

