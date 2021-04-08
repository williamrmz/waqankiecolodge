import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Header = () => {
    const { t } = useTranslation();
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);
    return (
        <header className="vh-100 w-100 header animate__animated animate__fadeInDown" id="inicio">
            <div className="h-100 w-50 d-flex justify-content-center align-items-center flex-column m-auto">
                <p className="h1 text-center text-white" style={{ fontSize: "3.5rem", fontWeight: "bolder" }}>
                    {data.site.siteMetadata.title}
                </p>
                <p className="h6 text-center text-white" style={{ fontSize: "1.4rem", fontWeight: "normal" }}>
                    {t(`Descripcion`)}
                </p>
                <button
                    className="btn"
                    style={{
                        marginTop: "1rem",
                        backgroundColor: "#FDCA30",
                        padding: ".3rem 5rem",
                        borderRadius: "2rem",
                    }}
                >
                    {t(`Ir`)}
                </button>
            </div>
            <div className="header-wave hw-first">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-100 w-100">
                    <path
                        d="M-18.34,96.20 C174.09,44.89 372.74,185.03 501.97,116.94 L500.00,150.00 L0.00,150.00 Z"
                        style={{
                            stroke: "none",
                            fill: "#EEEEEE",
                            opacity: ".5",
                        }}
                    ></path>
                </svg>
            </div>
            <div className="header-wave hw-second">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-100 w-100">
                    <path
                        d="M-18.34,96.20 C174.09,44.89 372.74,185.03 501.97,116.94 L500.00,150.00 L0.00,150.00 Z"
                        style={{
                            stroke: "none",
                            fill: "#EEEEEE",
                            opacity: ".5",
                        }}
                    ></path>
                </svg>
            </div>
            <div className="header-wave hw-third">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-100 w-100">
                    <path
                        d="M-18.34,96.20 C174.09,44.89 372.74,185.03 501.97,116.94 L500.00,150.00 L0.00,150.00 Z"
                        style={{ stroke: "none", fill: "#EEEEEE" }}
                    ></path>
                </svg>
            </div>
        </header>
    );
};

export default Header;
