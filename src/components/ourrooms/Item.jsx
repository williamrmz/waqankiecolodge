import React from "react";
import { Icon } from "@iconify/react";
import breadSlice from "@iconify-icons/mdi/bread-slice";
import birdIcon from "@iconify-icons/mdi/bird";
import binocularsIcon from "@iconify-icons/mdi/binoculars";
import flowerTulipOutline from "@iconify-icons/mdi/flower-tulip-outline";

const Item = ({ clase, image, room, price }) => {
    return (
        <div className={`carousel-item ${clase}`} room="solo">
            {image}
            <div className="h-25 w-100 d-flex justify-content-around  align-items-center">
                <div className="w-75 d-flex flex-column justify-content-center align-items-center">
                    <h2>{room}</h2>
                    <div
                        style={{ fontSize: "12px", listStyle: "none" }}
                        className="d-flex justify-content-around"
                    >
                        <div
                            className="d-none d-lg-block"
                            style={{ marginRight: "12px" }}
                        >
                            <li>
                                <Icon icon={breadSlice} />
                                <span>Desayuno Buffet </span>
                            </li>
                            <li>
                                <Icon icon={birdIcon} />
                                <span>Ingreso a trochas de obación de aves</span>
                            </li>
                        </div>
                        <div className="d-none d-lg-block">
                            <li>
                                <Icon icon={binocularsIcon} />
                                <span>Ingreso a observatorio de colibries</span>
                            </li>
                            <li>
                                <Icon icon={flowerTulipOutline} />
                                <span>Ingreso a jardines de orquídeas</span>
                            </li>
                        </div>

                        <div className="d-lg-none " style={{ marginBottom: "12px" }}>
                            <li>
                                <Icon icon={breadSlice} />
                                <span>Desayuno Buffet </span>
                            </li>
                            <li>
                                <Icon icon={birdIcon} />
                                <span>Ingreso a trochas de obación de aves</span>
                            </li>
                            <li>
                                <Icon icon={binocularsIcon} />
                                <span>Ingreso a observatorio de colibries</span>
                            </li>
                            <li>
                                <Icon icon={flowerTulipOutline} />
                                <span>Ingreso a jardines de orquídeas</span>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="w-25">
                    <h1>{price}</h1>
                </div>
            </div>
        </div>
    );
};

export default Item;
