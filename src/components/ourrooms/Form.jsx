import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Form = ({ sendInfo, handleChange }) => {
    const { t } = useTranslation();
    return (
        <form className="w-75 p-1">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <h3 className="mb-3">{t(`habitacion-reserva`)}</h3>

                <input
                    className="form-control mb-2"
                    type="text"
                    name="name"
                    placeholder={t(`habitacion-reserva-nombre`)}
                    aria-label={t(`habitacion-reserva-nombre`)}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-2"
                    type="text"
                    name="lastname"
                    placeholder={t(`habitacion-reserva-apellidos`)}
                    aria-label={t(`habitacion-reserva-apellidos`)}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-2"
                    type="text"
                    name="email"
                    placeholder={t(`habitacion-reserva-correo`)}
                    aria-label={t(`habitacion-reserva-correo`)}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-2"
                    type="text"
                    name="telf"
                    placeholder={t(`habitacion-reserva-telefono`)}
                    aria-label={t(`habitacion-reserva-telefono`)}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-2"
                    type="text"
                    name="incomeDate"
                    placeholder={t(`habitacion-reserva-fechallegada`)}
                    aria-label={t(`habitacion-reserva-fechallegada`)}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-4"
                    type="text"
                    name="leaveDate"
                    placeholder={t(`habitacion-reserva-fechasalida`)}
                    aria-label={t(`habitacion-reserva-fechasalida`)}
                    onChange={handleChange}
                />

                <button type="button" className="btn btn-dark w-75" onClick={() => sendInfo()}>
                    {t("boton-reserve")}
                </button>
            </div>
        </form>
    );
};

export default Form;
