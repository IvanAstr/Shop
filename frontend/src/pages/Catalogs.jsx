import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useHttp } from '../hooks/http.hooks';
import Form from 'react-bootstrap/Form';

import { Products } from '../components/card/productCard';
import { Search } from '../components/search/searchHeader';

import './catalogs.css';


export const Catalogs = () => {
    const id = useParams().id;
    const { request, loading } = useHttp();

    // const [products, setProducts] = useState([]);

    const [products, setProducts] = useState([]);

    const [searchName, setSearchName] = useState("");

    const filterName = products.filter( product =>{
        return product[1].toLowerCase().includes(searchName.toLowerCase());
    })

    

    const { filterProducts, setFilterProducts } = useState([]);

    const fetchProduct = React.useCallback(async () => {
        try {
            const response = await request(`/api/category/${id}`, 'GET', null);
            console.log(response);
            setProducts([...products, ...response.map(item => [item.id, item.name])]);
        }
        catch (err) {
            console.log(err);
        }
    }, [request]);

    React.useEffect(() => {
        console.log("update")
        fetchProduct();
    }, [fetchProduct]);

    return (
        <>
            <div className="filterContainer">
                <Form className="Search">
                    <Form.Control
                        // value={searchTerm}
                        type="search"
                        placeholder="Поиск..."
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                </Form>
            </div>
                <div className="containerCard">
                    {filterName.map((product, index) => {
                        console.log(id)

                        return (
                            <>
                                <Products key={index} id={product[0]} title={product[1]} description={product[2]} />
                            </>)

                    })}
                </div>
            
        </>
    );
};