import React from "react";
import TourMain from "./itinerareo/TourMain";
import TourScarlet from "./itinerareo/TourScarlet";
import TourWhite from "./itinerareo/TourWhite";
import TourYellow from "./itinerareo/TourYellow";

const Tour = ({ tourSelect }) => {
    if (tourSelect.rute === "main") return <TourMain />;
    if (tourSelect.rute === "scarlet") return <TourScarlet />;
    if (tourSelect.rute === "white") return <TourWhite />;
    if (tourSelect.ruta === "yellow") return <TourYellow />;
    return <div>Loading...</div>;
};

export default Tour;
