import React from "react";
import Item from "./Item";
// import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Carousel = () => {
    const image1 = <StaticImage className="reserve-img active" src={"../../images/1.jpg"} alt="MainImage" />;
    const image2 = <StaticImage className="reserve-img" src={"../../images/1.jpg"} alt="MainImage" />;
    return (
        <div id="carouselReserve" className="carousel slide" data-bs-interval="false">
            <div className="carousel-inner reserve-carousel reserve-container-room">
                <Item clase={"active"} image={image1} price={"$70"} room={"Habitación SOLO"} />
                <Item clase={""} image={image2} price={"$90"} room={"Habitación DOBLE"} />
                <Item clase={""} image={image2} price={"$120"} room={"Habitación TRIPLE"} />
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselReserve" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselReserve" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
