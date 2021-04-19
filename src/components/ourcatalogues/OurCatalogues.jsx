import React from "react";
import Card from "./Card";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

const OurCatalogues = () => {
    const { t } = useTranslation();
    const imagebird = (
        <StaticImage
            className="catalogue-card-image"
            src={"../../images/Buff_tailed_skilebill.jpg"}
            alt="card-bird"
            placeholder="none"
            style={{margin: '-1px'}}
        />
    );

    const imageflower = (
        <StaticImage
            className="catalogue-card-image"
            src={"../../images/Rufous_crested_coquette.jpg"}
            alt="card-flower"
            placeholder="none"
            style={{margin: '-1px'}}
        />
    );
    return (
        <section id="catalogos" className="d-flex flex-column h-100 justify-content-center align-items-center section-cataloge pb-5">
            <div className="mb-5" 
                    data-sal="slide-down"
                    data-sal-duration="1000" 
                    data-sal-delay="300"
                    data-sal-easing="ease">
                <h1 className="section-title text-white">{t(`seccion-catalogues`)}</h1>
            </div>
            <div className="container-catalogue container d-flex justify-content-evenly h-70">
                <Card
                    direction="right"
                    image={imagebird}
                    title={"CATÁLOGO DE AVES"}
                    description={
                        "Paraiso de orquideas y aves, un viaje que permite a los amantes de la naturaleza un memorable acercamiento a este mundo mágico."
                    }
                    ruta={"aves"}
                />
                <Card
                    direction="left"
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
