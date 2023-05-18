import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './src/pages/sharePages/HeaderPage/Header/Header';
import Footer from './src/pages/sharePages/FooterPage/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;