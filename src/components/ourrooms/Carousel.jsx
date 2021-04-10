import React from "react";
import Item from "./Item";
import { StaticImage } from "gatsby-plugin-image";

const Carousel = () => {
    const image1 = <StaticImage className="room-img active" src={"../../images/1.jpg"} alt="Luna" />;
    const image2 = <StaticImage className="room-img" src={"../../images/1.jpg"} alt="Luna 2" />;
    return (
        <div id="carouselRooms" className="carousel slide" data-bs-interval="false">
            <div className="carousel-inner rooms-carousel room-container">
                <Item clase={"active"} image={image1} price={"$70"} room={"Habitación SOLO"} />
                <Item clase={""} image={image2} price={"$90"} room={"Habitación DOBLE"} />
                <Item clase={""} image={image2} price={"$120"} room={"Habitación TRIPLE"} />
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselRooms" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselRooms" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;