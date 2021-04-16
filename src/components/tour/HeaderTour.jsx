import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeaderTour = ({ tourSelect }) => {
    const [state, setState] = useState(undefined);

    useEffect(() => {
        const fetchData = () => {
            setState(JSON.parse(localStorage.getItem("state")));
        };
        fetchData();
    }, []);

    if (state === undefined) {
        return <div>Loading...</div>;
    }

    if (state !== undefined) {
        return (
            <header className="w-100 header-tour animate__animated animate__fadeInDown" id="inicioTour">
                <div className="position-relative h-65 tour-header-image">
                    <StaticImage className="tourpage-image" src={"../../images/tour1.jpg"} alt="Luna 1" placeholder="none" />
                    <div className="tourpage-title-overlay text-white">
                        <h1>{state.title}</h1>
                    </div>
                </div>
                <div className="h-35 d-flex flex-column justify-content-center align-items-center mt-3 tour-header-text">
                    <p className="h5 w-65 text-center">
                        Este itinerario abarca la amazonia y áreas bajas a lo largo del rio Marañón, bosques tropicales, bosques
                        nublados, bosque seco de la parte alta del Marañón, bosques secos de la parte costa del Perú, etc.
                    </p>
                    <p className="h5 w-65 text-center">
                        El cliente puede elegir el área en que desea viajar o las aves que necesita ver o fotografiar y nosotros
                        organizamos su viaje de la mejor manera con un mínimo de 5 días del itinerario.
                    </p>
                </div>
            </header>
        );
    }
};

export default HeaderTour;
