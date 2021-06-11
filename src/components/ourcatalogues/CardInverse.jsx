import React from "react";
import { Link } from "gatsby-plugin-react-i18next"; // npm install --save-dev @iconify/react @iconify-icons/mdi
import { Icon } from "@iconify/react";
import eyeOutline from "@iconify-icons/mdi/eye-outline";

const Card = ({ image, title, description, ruta, direction }) => {
    return (
        <div className="card h-100 w-30 catalogue-card text-center ">
            <div className="h-50" style={{ padding: "2.5rem" }}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="image-link-to h-100 d-flex justify-content-center">
                {image}
                <div
                    className="btn-more-info-inverse"
                    data-sal="slide-up"
                    data-sal-duration="600"
                    data-sal-easing="ease"
                    // style={{ zIndex: 5500 }}
                >
                    <Link to={`/${ruta}`} style={{ textDecoration: "none" }}>
                        <span className="text-white me-2">Ver más</span>
                        <Icon icon={eyeOutline} className="text-white" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
