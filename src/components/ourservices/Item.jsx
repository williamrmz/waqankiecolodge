import React from "react";
import { getImage } from "gatsby-plugin-image";
import { Icon } from "@iconify/react";

const Item = ({ titulo, descripcion, imageUrl, icon }) => {
    return (
        <div
            className="d-flex align-items-center justify-content-around justify-content-center card-service"
            style={{
                backgroundImage: 'url("' + getImage(imageUrl).images.fallback.src + '")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="d-flex flex-column" style={{ color: "white" }}>
                <h4 className="fw-bold my-2">{titulo}</h4>
                <Icon icon={icon} className="m-auto my-2" width="2em" height="2em" />
                <p>{descripcion}</p>
            </div>
        </div>
    );
};

export default Item;
