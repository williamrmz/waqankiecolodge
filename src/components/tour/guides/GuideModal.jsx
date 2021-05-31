import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const GuideModal = () => {
    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Carlos Altamirano
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
                            <StaticImage
                                className="my-3 w-100"
                                src={"../../../images/tour1.jpg"}
                                alt="Luna 1"
                            />
                            <span className="text-center">
                                Carlos is native from Moyobamba He has a degree of
                                environmental engineer and another of oficial tour guide,
                                he specializes guiding the all Peru birding Circuit and
                                some other contries of South America (Ecuador, Colombia,
                                Brazil and Bolivia). He also has a broad knowledge in
                                other fauna and Orchids. Carlos is fluent in English,
                                Spanish and Portuguesse.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideModal;
