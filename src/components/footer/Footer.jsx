import React from "react";
import { Icon } from "@iconify/react";
import mapMarker from "@iconify-icons/mdi/map-marker";
import emailMultiple from "@iconify-icons/mdi/email-multiple";
import phoneIcon from "@iconify-icons/mdi/phone";

import { useTranslation } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";

const NavBar = () => {
    // const { language, originalPath } = useI18next();
    const { t } = useTranslation();
    return (
        <section className="section-footer text-white">
            <div className="row">
                <div className="col-lg-6 text-left mb-5">
                    <h5 className="fw-bold pb-4">{t("seccion-contacto")}</h5>
                    <div className="text-left row align-items-center mb-3">
                        <Icon
                            style={{ opacity: ".7" }}
                            className="col-3"
                            icon={mapMarker}
                            width="55"
                            height="55"
                        />
                        <div className="col-9">
                            <h6 className="fw-bold">{t("seccion-contacto-direccion")}</h6>
                            <p>Carretera Baños Termales Km. o3 Moyobamba - Perú</p>
                        </div>
                    </div>
                    <div className="text-left row align-items-center mb-3">
                        <Icon
                            style={{ opacity: ".7" }}
                            className="col-3"
                            icon={emailMultiple}
                            width="55"
                            height="55"
                        />
                        <div className="col-9">
                            <h6 className="fw-bold">{t("seccion-contacto-correo")}</h6>
                            <span className="d-flex">reservas@waqankilodge.pe</span>
                            <span className="d-flex">waqankireservas@hotmail.com</span>
                            <p>birdinnmoyo@gmail.com</p>
                        </div>
                    </div>
                    <div className="text-left row align-items-center mb-3">
                        <Icon
                            style={{ opacity: ".7" }}
                            className="col-3"
                            icon={phoneIcon}
                            width="55"
                            height="55"
                        />
                        <div className="col-9">
                            <h6 className="fw-bold">{t("seccion-contacto-telefonos")}</h6>
                            <span className="d-flex">+51 964 785 853</span>
                            <span className="d-flex">+51 964 016 947</span>
                            <span className="d-flex">+51 956 034 628</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 text-left">
                    <div>
                        <h5 className="fw-bold pb-3">{t("seccion-contacto-redes")}</h5>
                        <div className="d-flex">
                            <StaticImage
                                style={{ width: "50px", marginRight: "1rem" }}
                                src={"../../images/facebook.png"}
                                alt="Facebook"
                                placeholder="none"
                            />
                            <StaticImage
                                style={{ width: "50px", marginRight: "1rem" }}
                                src={"../../images/youtube.png"}
                                alt="Facebook"
                                placeholder="none"
                            />
                            <StaticImage
                                style={{ width: "50px" }}
                                src={"../../images/booking.png"}
                                alt="Facebook"
                                placeholder="none"
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <h5 className="fw-bold pb-3">{t("seccion-contacto-ubicacion")}</h5>
                        <div>
                            <iframe
                                title="Ubicación"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.186740028314!2d-76.9748769638866!3d-6.074369526224734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b73a9ccd06e39b%3A0x2696e92846e6fb49!2sOrquidario+Wakanki%2C+Moyobamba!5e0!3m2!1ses-419!2spe!4v1507416439830"
                                width="100%"
                                height="270"
                                frameBorder="0"
                                style={{ border: "0", borderRadius: "2rem" }}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center m-auto mt-5">{t("seccion-contacto-copy")}</div>
        </section>
    );
};

export default NavBar;
