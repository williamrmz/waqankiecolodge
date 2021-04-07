import React from "react";
import Colleccion from "./Collecion";

import { useTranslation, Trans } from "gatsby-plugin-react-i18next";

export default function OurServices() {
    const { t } = useTranslation();
    const arreglo1 = [
        { titulo: t(`service1-titulo`), descripcion: t(`service1-descripcion`) },
        { titulo: t(`service2-titulo`), descripcion: t(`service2-descripcion`) },
        { titulo: t(`service3-titulo`), descripcion: t(`service3-descripcion`) },
    ];

    const arreglo2 = [
        { titulo: t(`service4-titulo`), descripcion: t(`service4-descripcion`) },
        { titulo: t(`service5-titulo`), descripcion: t(`service5-descripcion`) },
        { titulo: t(`service6-titulo`), descripcion: t(`service6-descripcion`) },
    ];
    return (
        <section
            style={{
                backgroundColor: "#EEEEEE",
            }}
            id="servicios"
            className="position-relative vh-100 w-100 pt-5"
        >
            <div className="container-fluid align-self-stretch pt-5">
                <div className="d-flex justify-content-center">
                    <h2 style={{ fontWeight: "bolder" }}>
                        {/* NUESTROS <strong>SERVICIOS</strong> */}
                        <Trans>seccion-servicios</Trans>
                    </h2>
                </div>
                <div id="carouselServices" className="carousel slide" data-bs-interval="false">
                    <div className="carousel-inner">
                        <Colleccion clases={"active"} datos={arreglo1} />
                        <Colleccion datos={arreglo2} />
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselServices"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselServices"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
