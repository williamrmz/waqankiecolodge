import React from "react";
import ImageGallery from "./ImageGallery";

const Gallery = () => {
    return (
        <section className="d-flex flex-column h-100 w-100 justify-content-center align-items-center birs-section">
            <div className=" w-75 mt-5">
                <h1 className="font-weight-light text-center text-lg-left mt-5 mb-5 text-white">Galería de Aves</h1>

                {/* <hr className="mt-2 mb-5" /> */}

                <div className="row text-center text-lg-left">
                    <ImageGallery />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
