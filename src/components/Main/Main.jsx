import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/Share/Header/Header';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <div className='container mx-auto'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;