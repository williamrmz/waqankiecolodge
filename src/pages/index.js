import React from "react";
import "../styles/global.css";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { graphql, useStaticQuery } from "gatsby";

import NavBar from "../components/NavBar";
import OurServices from "../components/OurServices";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            backgroundw: file(relativePath: { eq: "images/bg.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: NONE)
                }
            }
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);
    return (
        <div className="container-fluid p-0">
            
			<NavBar />

            <header className="vh-100 w-100 header animate__animated animate__fadeInDown" id="inicio">
                <div className="h-100 w-50 d-flex justify-content-center align-items-center flex-column m-auto">
                    <p className="h1 text-center text-white" style={{fontSize: '3.5rem',fontWeight:'bolder'}}>
                        {data.site.siteMetadata.title}
                    </p>
                    <p className="h6 text-center text-white" style={{fontSize: '1.4rem',fontWeight:'normal'}}>
                        {data.site.siteMetadata.description}
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
                        Ir
                    </button>
                </div>
                <div className="header-wave hw-first">
                    <svg
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                        className="h-100 w-100"
                    >
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
                    <svg
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                        className="h-100 w-100"
                    >
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
                    <svg
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                        className="h-100 w-100"
                    >
                        <path
                            d="M-18.34,96.20 C174.09,44.89 372.74,185.03 501.97,116.94 L500.00,150.00 L0.00,150.00 Z"
                            style={{ stroke: "none", fill: "#EEEEEE" }}
                        ></path>
                    </svg>
                </div>
            </header>

            <main>
                <OurServices />
            </main>
        </div>
    );
};

export default IndexPage;
