import React from "react";
import { Link } from "gatsby";

const Card = ({ image, title, description, rute }) => {
    return (
        <div className="position-relative m-2 tour-card-container w-75 h-15 tour-border">
            {image}
            <div className="tour-card-overlay tour-border w-75">
                <div className="w-100">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link className="btn btn-success" to={"/tour"} state={{ name: rute }}>
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
