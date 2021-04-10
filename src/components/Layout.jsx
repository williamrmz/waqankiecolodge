import React from "react";
import Navbar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import "animate.css";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
