import React from "react";
import Colleccion from "./Colleccion";

import { useTranslation, Trans } from "gatsby-plugin-react-i18next";
import { Link, graphql, useStaticQuery } from "gatsby";

import roadIcon from '@iconify-icons/mdi/road';
import birdIcon from '@iconify-icons/mdi/bird';
import foodIcon from '@iconify-icons/mdi/food';
import flowerTulip from '@iconify-icons/mdi/flower-tulip';
import telescopeIcon from '@iconify-icons/mdi/telescope';
import waterIcon from '@iconify-icons/mdi/water';

export default function OurServices() {
    const { t } = useTranslation();
    const data = useStaticQuery(graphql`
        query {
            service1: file(relativePath: { eq: "service1.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: NONE)
                }
                name
            }
            service2: file(relativePath: { eq: "service2.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: NONE)
                }
                name
            }
            service3: file(relativePath: { eq: "service3.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: NONE)
                }
                name
            }
            service4: file(relativePath: { eq: "service4.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: NONE)
                }
                name
            }
            service5: file(relativePath: { eq: "service5.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: NONE)
                }
                name
            }
            service6: file(relativePath: { eq: "service6.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: NONE)
                }
                name
            }
        }
    `);
    const arreglo1 = [
        { titulo: t(`service1-titulo`), descripcion: t(`service1-descripcion`), imageUrl: data.service1, icon: roadIcon, },
        { titulo: t(`service2-titulo`), descripcion: t(`service2-descripcion`), imageUrl: data.service2, icon: birdIcon },
        { titulo: t(`service3-titulo`), descripcion: t(`service3-descripcion`), imageUrl: data.service3, icon: foodIcon },
    ];

    const arreglo2 = [
        { titulo: t(`service4-titulo`), descripcion: t(`service4-descripcion`), imageUrl: data.service4, icon: flowerTulip },
        { titulo: t(`service5-titulo`), descripcion: t(`service5-descripcion`), imageUrl: data.service5, icon: telescopeIcon },
        { titulo: t(`service6-titulo`), descripcion: t(`service6-descripcion`), imageUrl: data.service6, icon: waterIcon },
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
