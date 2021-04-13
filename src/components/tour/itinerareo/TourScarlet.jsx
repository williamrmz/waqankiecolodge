import React from "react";
import Day from "./Day";
import { useTranslation } from "gatsby-plugin-react-i18next";

const TourScarlet = () => {
    const { t } = useTranslation();
    return (
        <div className="w-100 d-flex justify-content-center align-items-center flex-column">
            <h1 className="mt-5 mb-3">Itinerario</h1>
            <ul className="timeline w-65">
                <Day day={"DAY 0"} paragraph={t(`scarlet-day0`)} site={"Hotel Monte Verde-Bellavista"} />
                <Day day={"DAY 1"} paragraph={t(`scarlet-day1`)} site={"Hotel-Plataforma"} />
                <Day day={"DAY 2"} paragraph={t(`scarlet-day2`)} site={"Hotel-Plataforma"} />
                <Day day={"DAY 3"} paragraph={t(`scarlet-day3`)} site={"Hotel Rio Cumbaza-Tarapoto."} />
                <Day day={"DAY 4"} paragraph={t(`scarlet-day4`)} site={""} />
            </ul>
        </div>
    );
};

export default TourScarlet;
