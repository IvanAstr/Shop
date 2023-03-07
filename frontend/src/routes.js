import React from 'react';
import {Route, Routes, } from 'react-router-dom';

import { Home }from './pages/Home';
import { About } from './pages/About';
import { Catalogs } from './pages/Catalogs';
import { Product } from './pages/Product';

export const UseRouter = () => {
    return (
        <Routes>
            <Route path="/main" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/catalogs/:id" element={<Catalogs/>}/>
            <Route path="/product/:id" element={<Product/>}/>

        </Routes>
    );
}