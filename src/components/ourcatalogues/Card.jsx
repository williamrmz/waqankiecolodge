import React from "react";
import { Link } from "gatsby-plugin-react-i18next"; // npm install --save-dev @iconify/react @iconify-icons/mdi
import { Icon } from "@iconify/react";
import eyeOutline from "@iconify-icons/mdi/eye-outline";

const Card = ({ image, title, description, ruta, direction }) => {
    return (
        <div
            className="card w-35 catalogue-card text-center"
            // data-sal={`slide-${direction}`}
            // data-sal-duration="600"
            // data-sal-easing="ease"
        >
            <div className="image-link-to">
                {image}
                <div
                    className="btn-more-info"
                    data-sal="slide-down"
                    data-sal-duration="600"
                    data-sal-delay="300"
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
            <div style={{ padding: "2.5rem" }}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default Card;
