import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useHttp } from '../hooks/http.hooks';

import { Products } from '../components/card/productCard';
import { Search } from '../components/search/searchHeader';

import './catalogs.css';


export const Catalogs = () => {
    const id = useParams().id;
    const { request, loading } = useHttp();

    // const [products, setProducts] = useState([]);

    const [products, setProducts] = useState([]);

    const { filterProducts, setFilterProducts } = useState([])

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
                <Search setFilterProducts={setFilterProducts} filterProducts={filterProducts} products={products} />
            </div>
            {filterProducts != null &&
                <div className="containerCard">
                    {products.map((product, index) => {
                        console.log(id)

                        return (
                            <>
                                <Products key={index} id={product[0]} title={product[1]} description={product[2]} />
                            </>)

                    })}
                </div>
            }
        </>
    );
};