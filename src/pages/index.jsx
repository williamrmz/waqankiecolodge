import React from "react";
import "../styles/global.css";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Reserve from "../components/reserve/Reserve";
import Catalogue from "../components/catalogue/Catalogue";

import NavBar from "../components/navbar/NavBar";
import Header from "../components/header/Header";
import OurServices from "../components/ourservices/OurServices";

const IndexPage = () => {
    return (
        <div className="container-fluid p-0">
            <NavBar />
            <Header />
            <main>
                <OurServices />
                <Reserve />
                <Catalogue />
            </main>
        </div>
    );
};

export default IndexPage;
