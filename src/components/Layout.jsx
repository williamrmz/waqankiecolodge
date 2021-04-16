import React, { useEffect } from "react";
import Navbar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import ScrollTopButton from "./ScrollTopButton";
import "animate.css";

const Layout = ({ children }) => {
    useEffect(() => {
        const visibleButton = () => {
            window.onscroll = () => {
                if (document.documentElement.scrollTop > 120) {
                    document.querySelector(".go-top-container").classList.add("show-top-button");
                } else {
                    document.querySelector(".go-top-container").classList.remove("show-top-button");
                }
            };
        };
        const eventButton = () => {
            document.querySelector(".go-top-container").addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            });
        };
        visibleButton();
        eventButton();
    }, []);

    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <ScrollTopButton />
        </>
    );
};

export default Layout;
