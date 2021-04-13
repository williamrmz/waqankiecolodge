import React from "react";
import Day from "./Day";
import { useTranslation } from "gatsby-plugin-react-i18next";

const TourYellow = () => {
    const { t } = useTranslation();
    return (
        <div className="w-100 d-flex justify-content-center align-items-center flex-column">
            <h1 className="mt-5 mb-3">Itinerario</h1>
            <ul className="timeline w-65">
                <Day day={"DAY 0"} paragraph={t(`yellow-day0`)} site={"Hotel La joya-leymebamba"} />
                <Day day={"DAY 1"} paragraph={t(`yellow-day1`)} site={"Hotel La joya-leymebamba."} />
                <Day day={"DAY 2"} paragraph={t(`yellow-day2`)} site={"Hotel Villa Madrid-Celendin."} />
                <Day day={"DAY 3"} paragraph={t(`yellow-day3`)} site={"Hotel El Mirador-cajamarca."} />
                <Day day={"DAY 4"} paragraph={t(`yellow-day4`)} site={"Hotel Santa Maria-Huamachuco."} />
                <Day day={"DAY 5"} paragraph={t(`yellow-day5`)} site={"Hotel Due-Trujillo."} />
                <Day day={"DAY 6"} paragraph={t(`yellow-day6`)} site={"Inti Hotel-chiclayo."} />
            </ul>
        </div>
    );
};

export default TourYellow;
