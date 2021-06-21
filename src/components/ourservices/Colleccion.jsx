import React from "react";
import Item from "./Item";
// import Description from "./Description";

const Colleccion = ({ clases, datos, sum }) => {
    return (
        <>
            <div className={`carousel-item ${clases}`}>
                <div className="d-flex justify-content-center mt-3">
                    {datos.map((service, i) => {
                        return (
                            <Item
                                key={i}
                                index={i + 1 + sum}
                                titulo={service.titulo}
                                descripcion={service.descripcion}
                                imagen={service.image}
                                icon={service.icon}
                            />
                        );
                    })}
                </div>
            </div>
            {/* {datos.map((service, i) => {
                return <Description index={i + 1 + sumZ} />;
            })} */}
        </>
    );
};

export default Colleccion;
