import React from 'react';
import {Route, Routes, } from 'react-router-dom';

import { Home }from './pages/Home';
import { About } from './pages/About';
import { Catalogs } from './pages/Catalogs';
import { Product } from './pages/Product';
import { NotFound } from './pages/NotFound';
import { Contacts } from './pages/Contacts';



export const UseRouter = () => {
    return (
        <Routes>
            
            <Route index path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/catalogs/:id" element={<Catalogs/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="*" element={<NotFound/>}/>

        </Routes>
        
    );
}