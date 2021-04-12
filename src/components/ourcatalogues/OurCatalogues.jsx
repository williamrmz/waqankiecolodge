import React from "react";
import Card from "./Card";
import { StaticImage } from "gatsby-plugin-image";

const OurCatalogues = () => {
    const imagebird = (
        <StaticImage className="h-50 catalogue-card-image" src={"../../images/Buff_tailed_skilebill.jpg"} alt="card-bird" />
    );

    const imageflower = (
        <StaticImage className="h-50 catalogue-card-image" src={"../../images/Rufous_crested_coquette.jpg"} alt="card-flower" />
    );
    return (
        <section id="catalogos" className="d-flex flex-column w-100 justify-content-center align-items-center section-cataloge">
            <div className="mb-4">
                <h1>Nuestros CATÁLOGOS</h1>
            </div>
            <div className="container-catalogue container d-flex justify-content-evenly h-75">
                <Card
                    image={imagebird}
                    title={"CATÁLOGO DE AVES"}
                    description={
                        "Paraiso de orquideas y aves, un viaje que permite a los amantes de la naturaleza un memorable acercamiento a este mundo mágico."
                    }
                    ruta={"aves"}
                />
                <Card
                    image={imageflower}
                    title={"CATÁLOGO DE ORQUÍDEAS"}
                    description={
                        "En el jardín botánico Waqanki cuenta con área de terreno destinada a la conservación de más de 250 especies de orquídeas y otras especies de plantas ornamentales de la Amazonia Peruana."
                    }
                />
            </div>
        </section>
    );
};

export default OurCatalogues;
