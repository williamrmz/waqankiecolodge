import React from "react";
import { Link } from "gatsby";

import { useI18next } from "gatsby-plugin-react-i18next";

const Card = ({ image, title, description, rute }) => {
    const { path } = useI18next();
    const ruta = "/" + path + "tour";

    return (
        <div className="position-relative m-2 tour-card-container w-75 h-15 tour-border">
            {image}
            <div className="tour-card-overlay tour-border w-75">
                <div className="w-100">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link className="btn btn-success" to={ruta} state={{ rute, title }}>
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
