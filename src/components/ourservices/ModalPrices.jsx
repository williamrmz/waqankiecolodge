import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const ModalPrices = ({ index }) => {
    const { t } = useTranslation();

    return (
        <>
            <div
                className="modal fade"
                id={`modal-prices`}
                tabIndex="-1"
                aria-labelledby="prices"
                aria-hidden="true"
                style={{ position: "absolute !important", top: "0" }}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal-prices-label">
                                {t(`services-price-title`)}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <span className="text-center">
                                    {t(`services-horario`)} : {t(`services-horario-descrip`)}
                                </span>
                            </div>
                            <div>
                                <table className="table table-bordered table-hover align-middle">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                rowSpan="2"
                                                className="align-middle text-center"
                                            >
                                                {t(`services-price-lugar`)}
                                            </th>
                                            <th
                                                scope="col"
                                                colSpan="2"
                                                className="align-middle text-center"
                                            >
                                                {t(`services-price-precio`)}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th scope="col" className="align-middle text-center">
                                                {t(`services-price-adultos`)}
                                            </th>
                                            <th scope="col" className="align-middle text-center">
                                                {t(`services-price-niños`)}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{t(`services-price-jardin`)}</td>
                                            <td className="text-end">S/. 5.00</td>
                                            <td className="text-end">S/. 2.50</td>
                                        </tr>
                                        <tr>
                                            <td>{t(`services-price-observatorio`)}</td>
                                            <td className="text-end">S/. 5.00</td>
                                            <td className="text-end">S/. 2.50</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalPrices;
