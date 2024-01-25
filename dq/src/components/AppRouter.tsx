import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Navbar from './Navbar';

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/index' />
                <Route path='/brand' />
                <Route path='/motion' />
                <Route path='/product' />
                <Route path='/ai' />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;