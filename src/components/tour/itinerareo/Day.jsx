import React from "react";
import { Icon } from "@iconify/react";
import mapMarker from "@iconify-icons/mdi/map-marker";

const Day = ({ day, paragraph }) => {
    return (
        <li className="mb-5">
            <h3>{day}</h3>
            <p>{paragraph}</p>
            <Icon icon={mapMarker} />
        </li>
    );
};

export default Day;
