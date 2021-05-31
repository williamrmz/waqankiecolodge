import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Description = () => {
    const { t } = useTranslation();

    return (
        <div
            className="modal fade"
            id={`description-hotel`}
            tabIndex="-1"
            aria-labelledby="description-hotel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <span className="text-center">{t(`Descripcion`)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
