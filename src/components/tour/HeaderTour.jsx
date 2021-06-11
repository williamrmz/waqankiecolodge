import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeaderTour = ({ title }) => {
    const imageHeader = () => {
        if (title === "Northen Perú Itinerary") {
            return (
                <StaticImage
                    className="tourpage-image"
                    src={"../../images/tour_main.jpg"}
                    alt="Luna 1"
                    placeholder="none"
                />
            );
        }

        if (title === "Scarlet Banded Barbet") {
            return (
                <StaticImage
                    className="tourpage-image"
                    src={"../../images/tour_scarlet.jpg"}
                    alt="Luna 1"
                    placeholder="none"
                />
            );
        }

        if (title === "White-Masked Antbird") {
            return (
                <StaticImage
                    className="tourpage-image"
                    src={"../../images/tour_white.jpg"}
                    alt="Luna 1"
                    placeholder="none"
                />
            );
        }
        if (title === "Yellow Faced Parrotlet-Purple Backed Sunbean") {
            return (
                <StaticImage
                    className="tourpage-image"
                    src={"../../images/tour_yyellow.jpg"}
                    alt="Luna 1"
                    placeholder="none"
                />
            );
        }
    };

    return (
        <header className="w-100 header-tour animate__animated animate__fadeInDown" id="inicioTour">
            <div className="position-relative h-65 tour-header-image">
                {imageHeader()}
                <div className="tourpage-title-overlay text-white">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="h-35 d-flex flex-column justify-content-center align-items-center mt-3 tour-header-text">
                <p className="h5 w-65 text-center">
                    Este itinerario abarca la amazonia y áreas bajas a lo largo del rio Marañón,
                    bosques tropicales, bosques nublados, bosque seco de la parte alta del Marañón,
                    bosques secos de la parte costa del Perú, etc.
                </p>
                <p className="h5 w-65 text-center">
                    El cliente puede elegir el área en que desea viajar o las aves que necesita ver
                    o fotografiar y nosotros organizamos su viaje de la mejor manera con un mínimo
                    de 5 días del itinerario.
                </p>
            </div>
        </header>
    );
};

export default HeaderTour;
