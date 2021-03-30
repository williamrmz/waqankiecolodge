import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Carousel = () => {
    return (
        <div id="carouselReserve" className="carousel slide">
            <div className="carousel-inner carousel-reserve">
                <div className="carousel-item active">
                    <StaticImage className="img-reserve" src="../../images/1.jpg" alt="..." />
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h3>Habitacion SOLO</h3>
                        <h2>$70</h2>
                    </div>
                </div>
                <div className="carousel-item">
                    <StaticImage className="img-reserve" src="../../images/1.jpg" alt="..." />
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h3>Habitacion Doble</h3>
                        <h2>$90</h2>
                    </div>
                </div>
                <div className="carousel-item">
                    <StaticImage className="img-reserve" src="../../images/1.jpg" alt="..." />
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h3>Habitacion TRIPLE</h3>
                        <h2>$120</h2>
                    </div>
                </div>
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
