import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const GuideModal = () => {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Carlos Altamirano
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <StaticImage className="my-3 w-100" src={"../../../images/tour1.jpg"} alt="Luna 1" />
                            <span className="text-center">
                                Carlos is native from Moyobamba He has a degree of environmental engineer and another of oficial
                                tour guide, he specializes guiding the all Peru birding Circuit and some other contries of South
                                America (Ecuador, Colombia, Brazil and Bolivia). He also has a broad knowledge in other fauna and
                                Orchids. Carlos is fluent in English, Spanish and Portuguesse.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideModal;
