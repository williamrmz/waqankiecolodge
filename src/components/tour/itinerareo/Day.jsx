import React from "react";
import { Icon } from "@iconify/react";
import mapMarker from "@iconify-icons/mdi/map-marker";

const Day = ({ day, paragraph, site }) => {
    return (
        <li className="mb-5">
            <h3>{day}</h3>
            <p>{paragraph}</p>
            <span style={{ color: "#ad1010" }}>
                <Icon icon={mapMarker} />
                {site}
            </span>
        </li>
    );
};

export default Day;
