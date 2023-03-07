import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useHttp } from '../hooks/http.hooks';

import { DetailProduct } from '../components/card/detailCard';
import './product.css';


export const Product = () => {
    const id = useParams().id;
    const { request, loading } = useHttp();

    const [product, setProducts] = useState([]);

    const fetchProduct = React.useCallback(async () => {
        try {
            const response = await request(`/api/product/${id}`, 'GET', null);
            // console.log(response);
            setProducts(
                [...product, 
                        response.id, 
                        response.name, 
                        response.description,
                        response.color,
                        response.gender,
                        response.price,
                        response.category,
                     
                ]);
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
            <div className="containerCard">
                {/* {console.log(product[1])} */}
                <DetailProduct
                    id={product[0]}
                    name={product[1]}
                    description={product[2]}
                    color={product[3]}
                    gender={product[4]}
                    price={product[5]}
                    category={product[6]}
                />
            </div>

        </>
    )
}