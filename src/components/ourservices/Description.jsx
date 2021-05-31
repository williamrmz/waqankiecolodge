import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Description = ({ index }) => {
    const { t } = useTranslation();

    return (
        <>
            <div
                className="modal fade"
                id={`description-service-${index}`}
                tabIndex="-1"
                aria-labelledby="description-service"
                aria-hidden="true"
                style={{ position: "absolute !important", top: "0" }}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="description-service-label">
                                {t(`service${index}-titulo`)}
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
                                    {t(`service${index}-descripcion`)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Description;
