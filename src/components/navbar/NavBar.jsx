import React from "react";
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";

const NavBar = () => {
    const { language, originalPath } = useI18next();
    const { t } = useTranslation();

    const imgEs = (
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
    );

    const imgEn = (
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
    );

    return (
        <nav
            className="navbar navbar-expand-sm navbar-dark navbar-bg"
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
                    <StaticImage
                        style={{ width: "130px" }}
                        src={"../../images/logo_white_last.png"}
                        alt="Luna 1"
                        placeholder="none"
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span
                        style={{
                            color: "white",
                            textColor: "white",
                            borderColor: "white",
                        }}
                        className="navbar-toggler-icon"
                    ></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav w-100">
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
                        <Link className="nav-link text-white mr-auto" to="/#tours">
                            {t("Tours")}
                        </Link>

                        <div className="ms-auto dropdown dropstart ">
                            <a
                                role="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                href="/"
                            >
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
                                <Link
                                    to={originalPath}
                                    rel="alternate"
                                    language={"es"}
                                    hrefLang="es"
                                    className="dropdown-item d-flex"
                                    style={{ cursor: "pointer" }}
                                >
                                    {imgEs}
                                    Español
                                </Link>

                                <Link
                                    to={originalPath}
                                    rel="alternate"
                                    language={"en"}
                                    hrefLang="en"
                                    className="dropdown-item d-flex"
                                    style={{ cursor: "pointer" }}
                                >
                                    {imgEn}
                                    English
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
