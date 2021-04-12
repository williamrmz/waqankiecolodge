import React from "react";

import { Link } from "gatsby";

import { Link as LinkI18, useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";

const NavBar = () => {
    const { language, originalPath } = useI18next();
    const { t } = useTranslation();

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
                <Link className="navbar-brand logo-header-link" to={"/"}>
                    <StaticImage style={{ width: "130px" }} src={"../../images/logo_white.png"} alt="Luna 1" placeholder="none" />
                </Link>

                <div className="container d-none d-lg-block">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link text-white active" aria-current="page" to="/">
                                {t("Inicio")}
                            </Link>
                            <Link className="nav-link text-white" to="/#servicios">
                                {t("Servicios")}
                            </Link>
                            <Link className="nav-link text-white" to="/#habitaciones">
                                {t("Reservas")}
                            </Link>
                            <Link className="nav-link text-white" to="/#catalogos">
                                {t("Catalogos")}
                            </Link>
                            <Link className="nav-link text-white" to="/#tours">
                                {t("Tours")}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="dropdown dropstart">
                    <a role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" href="/">
                        {language === "es" ? (
                            <StaticImage
                                className="box-shadow-img"
                                style={{ width: "35px", marginRight: "1rem" }}
                                src={`../../images/spanishLanguage.png`}
                                alt="Spanish"
                                placeholder="none"
                            />
                        ) : (
                            <StaticImage
                                className="box-shadow-img"
                                style={{ width: "35px", marginRight: "1rem" }}
                                src={"../../images/englishLanguage.png"}
                                alt="English"
                                placeholder="none"
                            />
                        )}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <LinkI18
                                to={originalPath}
                                language={"es"}
                                className="dropdown-item d-flex"
                                style={{ cursor: "pointer" }}
                            >
                                <StaticImage
                                    className="box-shadow-img"
                                    style={{
                                        width: "25px",
                                        marginRight: "1rem",
                                    }}
                                    src={"../../images/spanishLanguage.png"}
                                    alt="Spanish"
                                    placeholder="none"
                                />
                                Español
                            </LinkI18>
                        </li>

                        <li>
                            <LinkI18
                                to={originalPath}
                                language={"en"}
                                className="dropdown-item d-flex"
                                style={{ cursor: "pointer" }}
                            >
                                <StaticImage
                                    className="box-shadow-img"
                                    style={{
                                        width: "25px",
                                        marginRight: "1rem",
                                    }}
                                    src={"../../images/englishLanguage.png"}
                                    alt="Spanish"
                                    placeholder="none"
                                />
                                English
                            </LinkI18>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
