import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Guide = () => {
    return (
        <div className="position-relative mt-5 w-30 me-auto mr-auto mb-3">
            <div className="d-flex align-items-center justify-content-center pt-2 animate__animated animate__pulse animate__slow animate__repeat-3">
                <StaticImage className="image-profile-guide rounded-circle me-3" src={"../../../images/tour1.jpg"} alt="Luna 1" />
                <div className="text-center">
                    <h3>Carlos Altamirano</h3>
                    <h6>Guía Especialista</h6>

                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Conoce a tu Guía
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Guide;
