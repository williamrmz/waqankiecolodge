import React from "react";
import { Link } from "gatsby-plugin-react-i18next"; // npm install --save-dev @iconify/react @iconify-icons/mdi
import { Icon } from "@iconify/react";
import eyeOutline from "@iconify-icons/mdi/eye-outline";

const Card = ({ image, title, description, ruta, direction }) => {
    return (
        <div className="card position-relative h-100 w-35 catalogue-card text-center p-0 mb-3">
            <div style={{ padding: "2.5rem" }}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="image-link-to h-50">
                {image}
                <div
                    className="btn-more-info-inverse"
                    data-sal="slide-up"
                    data-sal-duration="600"
                    data-sal-easing="ease"
                >
                    <Link to={`/${ruta}`} style={{ textDecoration: "none" }}>
                        <span className="text-white" style={{ marginRight: "1rem" }}>
                            Ver más
                        </span>
                        <Icon icon={eyeOutline} className="ml-2 text-white" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
