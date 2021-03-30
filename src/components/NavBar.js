import React from "react";

import { Link, graphql, useStaticQuery } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function NavBar() {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo_white.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: NONE)
                }
            }
            spanish: file(relativePath: { eq: "spanish_language.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: NONE)
                }
            }

            english: file(relativePath: { eq: "english_language.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: NONE)
                }
            }
        }
    `);
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                zIndex: 4,
            }}
        >
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to={"/"}
                    style={{ margin: "1rem 0 0 2rem" }}
                >
                    <GatsbyImage
                        image={getImage(data.logo)}
                        style={{ width: "130px" }}
                    />
                </Link>

                <div className="container">
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <Link
                                className="nav-link text-white active"
                                aria-current="page"
                                to={"#"}
                            >
                                Inicio
                            </Link>
                            <Link
                                className="nav-link text-white"
                                to="#servicios"
                            >
                                Servicios
                            </Link>
                            <Link className="nav-link text-white" to="#">
                                Reservas
                            </Link>
                            <Link className="nav-link text-white" to="#">
                                Catálogos
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="dropdown dropstart">
                    <a
                        role="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        href="/"
                    >
                        <GatsbyImage
                            className="box-shadow-img"
                            image={getImage(data.spanish)}
                            style={{ width: "35px", marginRight: "1rem" }}
                        />
                    </a>
                    <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                    >
                        <li className="dropdown-item d-flex" style={{cursor:'pointer'}}>
                            <GatsbyImage
                                className="box-shadow-img"
                                image={getImage(data.english)}
                                style={{
                                    width: "25px",
                                    marginRight: "1rem",
                                }}
                            />
                            English
                        </li>
                        <li className="dropdown-item d-flex" style={{cursor:'pointer'}}>
                            {" "}
                            <GatsbyImage
                                className="box-shadow-img"
                                image={getImage(data.spanish)}
                                style={{
                                    width: "25px",
                                    marginRight: "1rem",
                                }}
                            />
                            Español
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
