import React from "react";
import TourMain from "./itinerareo/TourMain";
import TourScarlet from "./itinerareo/TourScarlet";
import TourWhite from "./itinerareo/TourWhite";
import TourYellow from "./itinerareo/TourYellow";

const Tour = ({ rute }) => {
    if (rute === "main") return <TourMain />;
    if (rute === "scarlet") return <TourScarlet />;
    if (rute === "white") return <TourWhite />;
    if (rute === "yellow") return <TourYellow />;
    return <div>Loading...</div>;
};

export default Tour;
