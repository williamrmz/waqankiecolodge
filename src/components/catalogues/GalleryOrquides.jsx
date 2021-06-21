import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ImageGallery from "./ImageGallery";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Gallery = () => {
    const { t } = useTranslation();
    const data = useStaticQuery(graphql`
        query {
            info: allFile(filter: { sourceInstanceName: { eq: "orquideas" } }) {
                edges {
                    node {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED)
                        }
                        id
                        name
                    }
                }
            }
        }
    `);

    return (
        <section className="d-flex flex-column h-100 w-100 justify-content-center align-items-center birs-section">
            <div className=" w-75 mt-5">
                <h1 className="font-weight-light text-center text-lg-left mt-5 mb-5 text-white">
                    {t("catalogues-titulo-orquides")}
                </h1>

                {/* <hr className="mt-2 mb-5" /> */}

                <div className="row text-center text-lg-left">
                    <ImageGallery data={data} />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
