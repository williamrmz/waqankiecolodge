import React from "react";
import Card from "./Card";
import { StaticImage } from "gatsby-plugin-image";

const OurTours = () => {
    return (
        <section id="tours" className="section-tours d-flex flex-column w-100 justify-content-center align-items-center">
            <div className="mb-4 mt-5 text-center text-white" 
                    data-sal="slide-down"
                    data-sal-duration="1000" 
                    data-sal-delay="300"
                    data-sal-easing="ease">
                <h2 style={{ fontWeight: "bolder", fontSize: "2rem" }} >
                    Nuestros <strong>Tours</strong>
                </h2>
                <p>Ideal para excursiones en plena naturaleza y visitar lugares turísticos en lo mas profundo de la selva.</p>
            </div>

            <div className="tour-container-card">
                <Card
                    delay="300"
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
                    delay="500"
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
                    delay="700"
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
                    delay="900"
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
