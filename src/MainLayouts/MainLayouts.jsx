import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router';

const MainLayouts = () => {
    //  throw new Error("Test error");
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

            <ToastContainer />
        </div>
    );
};

export default MainLayouts;