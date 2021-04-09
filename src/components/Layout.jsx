import React from "react";
import Navbar from "./navbar/NavBar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default Layout;
