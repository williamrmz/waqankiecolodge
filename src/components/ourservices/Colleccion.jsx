import React from "react";
import Item from "./Item";

const Colleccion = ({ clases, datos }) => {
    return (
        <div className={`carousel-item ${clases}`}>
            <div className="d-flex justify-content-center mt-5">
                {datos.map((service) => {
                    return <Item titulo={service.titulo} descripcion={service.descripcion} />;
                })}
            </div>
        </div>
    );
};

export default Colleccion;
