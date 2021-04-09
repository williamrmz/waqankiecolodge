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
                <p style={{ width: "500px", fontSize: "1.1rem" }}>
                    Ideal para excursiones en plena naturaleza y visitar lugares turísticos en lo mas profundo de la selva.
                </p>
                <StaticImage
                    style={{ width: "300px", height: "294px", margin: "auto", marginTop: "1rem" }}
                    src={"../../images/ourTours.png"}
                    alt="ourTours"
                />
            </div>

            <div className="container h-75 d-flex flex-column align-items-center">
                <Card
                    image={<StaticImage className="tour-border tour-image" src={"../../images/tour1.jpg"} alt="Luna 1" />}
                    title={"Northen Perú Itenereari"}
                    description={
                        "Paraiso de orquideas y aves, un viaje que permite a los amantes de la naturaleza un memorable acercamiento a este mundo mágico."
                    }
                    rute={"main"}
                />
                <Card
                    image={<StaticImage className="tour-border tour-image" src={"../../images/tour2.jpg"} alt="Luna 2" />}
                    title={"Scarlet Banded Barbet"}
                    description={
                        "Paraiso de orquideas y aves, un viaje que permite a los amantes de la naturaleza un memorable acercamiento a este mundo mágico."
                    }
                    rute={"scarlet"}
                />
                <Card
                    image={<StaticImage className="tour-border tour-image" src={"../../images/tour3.jpg"} alt="Luna 3" />}
                    title={"White-Masked Antbird"}
                    description={
                        "Paraiso de orquideas y aves, un viaje que permite a los amantes de la naturaleza un memorable acercamiento a este mundo mágico."
                    }
                    rute={"white"}
                />
                <Card
                    image={<StaticImage className="tour-border tour-image" src={"../../images/tour4.jpg"} alt="Luna 4" />}
                    title={"Yellow Faced Parrotlet-Purple Backed Sunbean"}
                    description={
                        "Paraiso de orquideas y aves, un viaje que permite a los amantes de la naturaleza un memorable acercamiento a este mundo mágico."
                    }
                    rute={"yellow"}
                />
            </div>
        </section>
    );
};

export default OurTours;
