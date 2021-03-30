import React from "react";
import Carousel from "./Carousel";
import Form from "./Form";

const Reserve = () => {
    return (
        <section
            style={{
                backgroundColor: "blue",
            }}
            id="habitaciones"
            className="d-flex vh-100 w-100 justify-content-center align-items-center"
        >
            <div className="container container-reserve d-flex h-75 m-0 p-0">
                <div className="w-65 h-100 d-flex flex-column ">
                    <Carousel />
                </div>
                <div className="w-35 h-100 form-reserve" style={{ backgroundColor: "#993355" }}>
                    <Form />
                </div>
            </div>
        </section>
    );
};

export default Reserve;
