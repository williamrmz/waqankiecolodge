import React from "react";
import { Icon } from "@iconify/react";
import eyeOutline from "@iconify-icons/mdi/eye-outline";
// import Description from "./Description";

const Item = ({ index, titulo, imagen, icon }) => {
    return (
        <>
            <div
                className="position-relative d-flex align-items-center justify-content-center card-service-container"
                style={{
                    height: "405px",
                }}
            >
                {imagen}

                <div
                    className="d-flex flex-column align-items-center justify-content-center text-center"
                    style={{ color: "white", zIndex: "2" }}
                >
                    <h4 className="fw-bold my-2">{titulo}</h4>
                    <Icon icon={icon} className="m-auto my-2" width="2em" height="2em" />
                    <div
                        className="btn btn-outline btn-service"
                        data-bs-toggle="modal"
                        data-bs-target={`#description-service-${index}`}
                    >
                        <span className="text-white" style={{ marginRight: "1rem" }}>
                            Ver más
                        </span>
                        <Icon icon={eyeOutline} className="ml-2 text-white" />
                    </div>
                </div>
            </div>

            {/* <Description index={index} /> */}
        </>
    );
};

export default Item;
