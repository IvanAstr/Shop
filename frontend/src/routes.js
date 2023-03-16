import React from 'react';
import {Route, Routes, } from 'react-router-dom';

import { Home }from './pages/Home';
import { About } from './pages/About';
import { Catalogs } from './pages/Catalogs';
import { Product } from './pages/Product';
import { NotFound } from './pages/NotFound';
import { ContactUs } from './pages/Contacts.js';
import {BasketProduct} from './pages/Basket';
import { PaymentUs } from "./pages/PaymentUs"
import {Auth} from './pages/Auth';


export const UseRouter = () => {
    return (
        <Routes>

            <Route index path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/catalogs/:id" element={<Catalogs/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/contacts" element={<ContactUs/>}/>
            <Route path="/basket" element={<BasketProduct/>}/>
            <Route path="/payment" element={<PaymentUs/>}/>
            <Route path="/auth" element={<Auth/>}/>
            
            <Route path="*" element={<NotFound/>}/>

        </Routes>
        
    );
}