import React from "react";
import { Icon } from "@iconify/react";
import chevronUp from "@iconify-icons/mdi/chevron-up";

const ScrollTopButton = () => {
    return (
        <div className="go-top-container">
            <div className="go-top-button">
                <Icon icon={chevronUp} className="go-top-icon" />
            </div>
        </div>
    );
};

export default ScrollTopButton;
