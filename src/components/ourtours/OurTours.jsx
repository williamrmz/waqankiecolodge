import React from "react";
import Card from "./Card";
import { StaticImage } from "gatsby-plugin-image";

const OurTours = () => {
    return (
        <section id="tours" className="section-tours d-flex flex-column w-100 justify-content-center align-items-center pt-5">
            <div className="mb-4 h-25 mt-5 pt-5 text-center text-white">
                <h2 style={{ fontWeight: "bolder", fontSize: "2rem" }}>
                    Nuestros <strong>Tours</strong>
                </h2>
                {/* <p>Ideal para excursiones en plena naturaleza y visitar lugares turísticos en lo mas profundo de la selva.</p> */}
                <StaticImage
                    style={{ width: "300px", height: "294px", margin: "auto", marginTop: "1rem" }}
                    src={"../../images/ourTours.png"}
                    alt="ourTours"
                />
            </div>

            <div className="tour-container-card h-75 d-flex flex-column align-items-center">
                <Card
                    image={
                        <StaticImage
                            className="tour-border tour-image"
                            src={"../../images/tour1.jpg"}
                            alt="Luna 1"
                            placeholder="none"
                        />
                    }
                    title={"Northen Perú Itinerary"}
                    description={
                        "Este itinerario abarca la amazonia y áreas bajas a lo largo del rio Marañón, bosques tropicales, bosques nublados, bosque seco de la parte alta del Marañón, bosques secos de la parte costa del Perú, etc."
                    }
                    rute={"main"}
                />
                <Card
                    image={
                        <StaticImage
                            className="tour-border tour-image"
                            src={"../../images/tour2.jpg"}
                            alt="Luna 2"
                            placeholder="none"
                        />
                    }
                    title={"Scarlet Banded Barbet"}
                    description={
                        "Este itinerario abarca la amazonia y áreas bajas a lo largo del rio Marañón, bosques tropicales, bosques nublados, bosque seco de la parte alta del Marañón, bosques secos de la parte costa del Perú, etc."
                    }
                    rute={"scarlet"}
                />
                <Card
                    image={
                        <StaticImage
                            className="tour-border tour-image"
                            src={"../../images/tour3.jpg"}
                            alt="Luna 3"
                            placeholder="none"
                        />
                    }
                    title={"White-Masked Antbird"}
                    description={
                        "Este itinerario abarca la amazonia y áreas bajas a lo largo del rio Marañón, bosques tropicales, bosques nublados, bosque seco de la parte alta del Marañón, bosques secos de la parte costa del Perú, etc."
                    }
                    rute={"white"}
                />
                <Card
                    image={
                        <StaticImage
                            className="tour-border tour-image"
                            src={"../../images/tour4.jpg"}
                            alt="Luna 4"
                            placeholder="none"
                        />
                    }
                    title={"Yellow Faced Parrotlet-Purple Backed Sunbean"}
                    description={
                        "Este itinerario abarca la amazonia y áreas bajas a lo largo del rio Marañón, bosques tropicales, bosques nublados, bosque seco de la parte alta del Marañón, bosques secos de la parte costa del Perú, etc."
                    }
                    rute={"yellow"}
                />
            </div>
        </section>
    );
};

export default OurTours;
