import React from "react";
import { StaticImage } from "gatsby-plugin-image";


const HeaderTour = () => {
    return (
        <header className="vh-100 w-100 header-tour animate__animated animate__fadeInDown" id="inicioTour">
            <div className="position-relative h-65">
                <StaticImage className="tourpage-image" src={"../../images/tour1.jpg"} alt="Luna 1" />
                <div className="tourpage-title-overlay text-white">
                    <h1>TÍTULO DEL TOUR</h1>
                </div>
            </div>
            <div className="h-35 d-flex justify-content-center mt-5">
                <p className="h5 w-75 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestias ex? Corrupti impedit vero sequi
                    sit cum. Amet repellendus sint odio ducimus quis, ullam magni iure nemo quia nulla harum earum tenetur ipsa
                    nihil deleniti est voluptates possimus corrupti blanditiis. Vel non architecto est voluptate nihil
                    necessitatibus molestiae reprehenderit molestias.
                </p>
            </div>
        </header>
    );
};

export default HeaderTour;
