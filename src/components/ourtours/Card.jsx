import React, { useEffect } from "react";
import { Link } from "gatsby-plugin-react-i18next";

const Card = ({ image, title, description, rute, delay }) => {
    // let state = { rute, title };

    // localStorage.setItem("state", JSON.stringify(state));

    useEffect(() => {
        const fetchData = () => {
            localStorage.setItem("state", JSON.stringify({ rute, title }));
        };
        fetchData();
    }, [rute, title]);

    return (
        <div className="position-relative m-2 tour-card-container tour-border" 
        data-sal="slide-down"
        data-sal-duration="1000" 
        data-sal-delay={delay}
        data-sal-easing="ease">
            {image}
            <div className="tour-card-overlay tour-border">
                <div className="w-100">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link className="btn btn-success" to={"/tour"}>
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
