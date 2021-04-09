import React from "react";

const Item = ({ titulo, descripcion }) => {
    return (
        <div className="d-flex justify-content-around justify-content-center align-items-center card-service">
            <div className="d-flex flex-column">
                <div className="icon-service-button"></div>
                <h5 className="text-uppercase fw-bold mb-4">{titulo}</h5>
                <p style={{ textAlign: "justify" }}>{descripcion}</p>
            </div>
        </div>
    );
};

export default Item;
