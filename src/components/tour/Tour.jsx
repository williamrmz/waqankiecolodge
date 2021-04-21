import React, { useState, useEffect } from "react";
import TourMain from "./itinerareo/TourMain";
import TourScarlet from "./itinerareo/TourScarlet";
import TourWhite from "./itinerareo/TourWhite";
import TourYellow from "./itinerareo/TourYellow";

const Tour = ({ tourSelect }) => {
    const [state, setState] = useState(undefined);

    useEffect(() => {
        const fetchData = () => {
            setState(JSON.parse(localStorage.getItem("state")));
        };
        fetchData();
    }, []);

    if (state?.rute === "main") return <TourMain />;
    if (state?.rute === "scarlet") return <TourScarlet />;
    if (state?.rute === "white") return <TourWhite />;
    if (state?.rute === "yellow") return <TourYellow />;
    return <div>Loading...</div>;
};

export default Tour;
