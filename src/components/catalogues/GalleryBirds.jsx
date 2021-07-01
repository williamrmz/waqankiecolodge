import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ImageGallery from "./ImageGallery";
import { Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";

const Gallery = () => {
    const { t } = useTranslation();
    const data = useStaticQuery(graphql`
        query {
            info: allFile(filter: { sourceInstanceName: { eq: "aves" } }) {
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
            <div className="w-75 mt-5">
                <h1 className="font-weight-light text-center text-lg-left mt-5 mb-4 text-white">
                    {t("catalogues-titulo-aves")}
                </h1>

                <div className="w-100 d-flex justify-content-center align-items-center mb-4 text-center">
                    <Link to={"https://ebird.org/home"} target="_blank">
                        <StaticImage
                            className="catalogue-ebird w-60"
                            src={"../../images/ebird_logo.png"}
                            alt="card-bird"
                            placeholder="none"
                        />
                    </Link>
                </div>
                {/* <hr className="mt-2 mb-5" /> */}

                <div className="row text-center text-lg-left">
                    <ImageGallery data={data} />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
