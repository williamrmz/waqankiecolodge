import React from "react";
import Day from "./Day";
import { useTranslation } from "gatsby-plugin-react-i18next";

const TourWhite = () => {
    const { t } = useTranslation();
    return (
        <div className="w-100 d-flex justify-content-center align-items-center flex-column">
            <h1 className="mt-5 mb-3">Itinerario</h1>
            <ul className="timeline w-65">
                <Day day={"DAY 1"} paragraph={t(`white-day1`)} />
                <Day day={"DAY 2"} paragraph={t(`white-day2`)} />
                <Day day={"DAY 3"} paragraph={t(`white-day3`)} />
                <Day day={"DAY 4"} paragraph={t(`white-day4`)} />
            </ul>
        </div>
    );
};

export default TourWhite;
