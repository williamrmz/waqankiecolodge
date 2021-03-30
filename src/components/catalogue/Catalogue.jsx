import React from "react";
import Card from "./Card";
import { StaticImage } from "gatsby-plugin-image";

const Catalogue = () => {
    const ruta = "../../images/1.jpg";
    const image = <StaticImage className="card-img-top" src={ruta} alt="..." />;

    return (
        <section
            style={{
                backgroundColor: "#eeaa22",
            }}
            id="catalogue"
            className="d-flex vh-100 w-100 justify-content-center align-items-center"
        >
            <div className="container d-flex justify-content-evenly h-50 m-0 p-0">
                <Card image={image} title={"CARD UNO"} description={"DESCRIPCIÓN UNO"} />
                <Card image={image} title={"CARD DOS"} description={"DESCRIPCIÓN DOS"} />
                <Card image={image} title={"CARD TRES"} description={"DESCRIPCIÓN TRES"} />
            </div>
        </section>
    );
};

export default Catalogue;
